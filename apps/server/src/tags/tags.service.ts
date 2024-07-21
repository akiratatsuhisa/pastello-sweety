import { Injectable, NotFoundException } from '@nestjs/common';
import { and, eq, gt, inArray, lte, sql } from 'drizzle-orm';
import { IdentityUser } from 'src/auth/identity.class';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { FilterKey, rowNumerAlias } from 'src/data-loader/data-loader.types';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { EntityName, PaginationFilter } from 'src/graphql/models';
import { tagRelationships, tags } from 'src/schema';

import { AddTag, CreateTag, RemoveTag, Tag, UpdateTag } from './types';

@Injectable()
export class TagsService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly dataLoaderService: DataLoaderService,
  ) {}

  async loadTagsByEntityId(
    enityName: EntityName,
    entityId: bigint,
    filter: PaginationFilter,
  ) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterKey<PaginationFilter>,
      bigint,
      Array<Tag>
    >({ __key: `loadTagsByEntityId:${enityName}`, ...filter }, async (keys) => {
      const rankedTags = this.drizzleService.db.$with('ranked_tags').as(
        this.drizzleService.db
          .select({
            id: tags.id,
            name: tags.name,
            createdBy: tags.createdBy,
            createdAt: tags.createdAt,
            updatedBy: tags.updatedBy,
            updatedAt: tags.updatedAt,
            entityId: tagRelationships.entityId,
            rowNumber:
              sql`ROW_NUMBER() OVER (PARTITION BY ${tagRelationships.entityId} ORDER BY ${tagRelationships.id})`.as(
                rowNumerAlias,
              ),
          })
          .from(tags)
          .leftJoin(tagRelationships, eq(tagRelationships.tagId, tags.id))
          .where(
            and(
              eq(tagRelationships.entityName, enityName),
              inArray(tagRelationships.entityId, [...keys]),
            ),
          ),
      );

      const result = await this.drizzleService.db
        .with(rankedTags)
        .select()
        .from(rankedTags)
        .where(
          and(
            gt(rankedTags.rowNumber, filter.offset),
            lte(rankedTags.rowNumber, filter.limit),
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

      return keys.map((key) => mapResult.get(key) ?? []);
    });

    return dataLoader.load(entityId);
  }

  async findAll(filter: PaginationFilter) {
    const result = await this.drizzleService.db
      .select()
      .from(tags)
      .orderBy(tags.id)
      .offset(filter.offset)
      .limit(filter.limit)
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
