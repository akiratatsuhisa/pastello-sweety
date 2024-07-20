import { Injectable, NotFoundException } from '@nestjs/common';
import { and, eq, inArray } from 'drizzle-orm';
import { IdentityUser } from 'src/auth/identity.class';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { FilterProps } from 'src/data-loader/data-loader.types';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { EntityName } from 'src/graphql/models';
import { tagRelationships, tags } from 'src/schema';

import { CreateTag, Tag, UpdateTag } from './types';

@Injectable()
export class TagsService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly dataLoaderService: DataLoaderService,
  ) {}

  async loadTagsByPostId(postId: bigint) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterProps,
      bigint,
      Array<Tag>
    >({ __key: 'loadTagsByPostId' }, async (keys) => {
      const result = await this.drizzleService.db
        .select({
          id: tags.id,
          name: tags.name,
          createdBy: tags.createdBy,
          createdAt: tags.createdAt,
          updatedBy: tags.updatedBy,
          updatedAt: tags.updatedAt,
          postId: tagRelationships.entityId,
        })
        .from(tags)
        .leftJoin(tagRelationships, eq(tagRelationships.tagId, tags.id))
        .where(
          and(
            eq(tagRelationships.entityName, 'post'),
            inArray(tagRelationships.entityId, [...keys]),
          ),
        )
        .execute();

      return keys.map(
        (key) =>
          result.filter((tag) => tag.postId === key) as unknown as Array<Tag>,
      );
    });

    return dataLoader.load(postId);
  }

  async findAll() {
    const result = await this.drizzleService.db
      .select()
      .from(tags)
      .orderBy(tags.id)
      .execute();

    return result;
  }

  async findById(id: bigint) {
    const [result] = await this.drizzleService.db
      .select()
      .from(tags)
      .where(eq(tags.id, id))
      .execute();

    if (!result) {
      throw new NotFoundException();
    }

    return result;
  }

  async create(data: CreateTag, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .insert(tags)
      .values({
        ...data,
        ...this.drizzleService.createFields(user),
      })
      .returning()
      .execute();

    return result;
  }

  async update(id: bigint, data: UpdateTag, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .update(tags)
      .set({
        ...data,
        ...this.drizzleService.uppdateFields(user),
      })
      .where(eq(tags.id, id))
      .returning()
      .execute();

    return result;
  }

  async delete(id: bigint) {
    const [result] = await this.drizzleService.db
      .delete(tags)
      .where(eq(tags.id, id))
      .returning()
      .execute();

    return result;
  }

  async add(
    entityName: EntityName,
    entityId: bigint,
    tagId: bigint,
    user: IdentityUser,
  ) {
    const [result] = await this.drizzleService.db
      .insert(tagRelationships)
      .values({
        entityName,
        entityId,
        tagId,
        ...this.drizzleService.createFields(user),
      })
      .returning()
      .execute();

    return result;
  }

  async remove(entityName: EntityName, entityId: bigint, tagId: bigint) {
    const [result] = await this.drizzleService.db
      .delete(tagRelationships)
      .where(
        and(
          eq(tagRelationships.entityName, entityName),
          eq(tagRelationships.entityId, entityId),
          eq(tagRelationships.tagId, tagId),
        ),
      )
      .returning()
      .execute();

    return result;
  }
}
