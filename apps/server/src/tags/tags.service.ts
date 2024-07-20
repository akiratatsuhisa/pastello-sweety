import { Injectable, NotFoundException } from '@nestjs/common';
import { and, eq, inArray } from 'drizzle-orm';
import { IdentityUser } from 'src/auth/identity.class';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { FilterProps } from 'src/data-loader/data-loader.types';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { EntityName } from 'src/graphql/models';
import { tagRelationships, tags } from 'src/schema';

import { AddTag, CreateTag, RemoveTag, Tag, UpdateTag } from './types';

@Injectable()
export class TagsService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly dataLoaderService: DataLoaderService,
  ) {}

  async loadTagsByEntityId(enityName: EntityName, entityId: bigint) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterProps,
      bigint,
      Array<Tag>
    >({ __key: `loadTagsByEntityId:${enityName}` }, async (keys) => {
      const result = await this.drizzleService.db
        .select({
          id: tags.id,
          name: tags.name,
          createdBy: tags.createdBy,
          createdAt: tags.createdAt,
          updatedBy: tags.updatedBy,
          updatedAt: tags.updatedAt,
          entityId: tagRelationships.entityId,
        })
        .from(tags)
        .leftJoin(tagRelationships, eq(tagRelationships.tagId, tags.id))
        .where(
          and(
            eq(tagRelationships.entityName, enityName),
            inArray(tagRelationships.entityId, [...keys]),
          ),
        )
        .execute();

      const mapResult = result.reduce((map, result) => {
        if (map.has(result.entityId)) {
          map.get(result.entityId).push(result as unknown as Tag);
        } else {
          map.set(result.entityId, [result as unknown as Tag]);
        }
        return map;
      }, new Map<bigint, Array<Tag>>());

      return keys.map((key) => mapResult.get(key));
    });

    return dataLoader.load(entityId);
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
        ...this.drizzleService.updatedFields(user),
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

  async add(data: AddTag, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .insert(tagRelationships)
      .values({
        ...data,
        ...this.drizzleService.createFields(user),
      })
      .returning()
      .execute();

    return result;
  }

  async remove(data: RemoveTag) {
    const [result] = await this.drizzleService.db
      .delete(tagRelationships)
      .where(
        and(
          eq(tagRelationships.entityName, data.entityName),
          eq(tagRelationships.entityId, data.entityId),
          eq(tagRelationships.tagId, data.tagId),
        ),
      )
      .returning()
      .execute();

    return result;
  }
}
