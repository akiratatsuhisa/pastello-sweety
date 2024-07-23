import { Injectable, NotFoundException } from '@nestjs/common';
import { and, eq, gt, inArray, lte, sql, SQLWrapper } from 'drizzle-orm';
import { IdentityUser } from 'src/auth/identity.class';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { FilterKey, rowNumerAlias } from 'src/data-loader/data-loader.types';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { EntityName, PaginationFilter } from 'src/graphql/models';
import { posts, tagRelationships } from 'src/schema';
import { enums } from 'utils';

import { CreatePost, Post, PostsFilter, UpdatePost } from './types';

@Injectable()
export class PostsService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly dataLoaderService: DataLoaderService,
  ) {}

  async loadPostById(id: bigint, isPublishedOnly: boolean) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterKey,
      bigint,
      Post
    >({ __key: 'loadPostById', isPublishedOnly }, async (keys) => {
      const result = await this.drizzleService.db
        .select()
        .from(posts)
        .where(
          and(
            inArray(posts.id, [...keys]),
            isPublishedOnly ? eq(posts.isPublish, true) : undefined,
          ),
        )
        .execute();

      const mapResult = result.reduce((map, result) => {
        map.set(result.id, result as Post);
        return map;
      }, new Map<bigint, Post>());

      return keys.map((key) => mapResult.get(key));
    });

    return dataLoader.load(id);
  }

  async loadPostsByTagId(tagId: bigint, filter: PaginationFilter) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterKey<PaginationFilter>,
      bigint,
      Array<Post>
    >({ __key: 'loadPostsByTagId', ...filter }, async (keys) => {
      const rankedPosts = this.drizzleService.db.$with('ranked_posts').as(
        this.drizzleService.db
          .select({
            id: posts.id,
            type: posts.type,
            title: posts.title,
            description: posts.description,
            content: posts.content,
            isPublish: posts.isPublish,
            createdBy: posts.createdBy,
            createdAt: posts.createdAt,
            updatedBy: posts.updatedBy,
            updatedAt: posts.updatedAt,
            tagId: tagRelationships.tagId,
            rowNumber:
              sql`ROW_NUMBER() OVER (PARTITION BY ${tagRelationships.tagId} ORDER BY ${tagRelationships.id})`.as(
                rowNumerAlias,
              ),
          })
          .from(posts)
          .leftJoin(
            tagRelationships,
            and(
              eq(tagRelationships.entityName, EntityName.POST),
              eq(tagRelationships.entityId, posts.id),
            ),
          )
          .where(inArray(tagRelationships.tagId, [...keys])),
      );

      const result = await this.drizzleService.db
        .with(rankedPosts)
        .select()
        .from(rankedPosts)
        .where(
          and(
            gt(rankedPosts.rowNumber, filter.offset),
            lte(rankedPosts.rowNumber, filter.limit),
          ),
        )
        .execute();

      const mapResult = result.reduce((map, result) => {
        if (map.has(result.tagId)) {
          map.get(result.tagId).push(result as unknown as Post);
        } else {
          map.set(result.tagId, [result as unknown as Post]);
        }
        return map;
      }, new Map<bigint, Array<Post>>());

      return keys.map((key) => mapResult.get(key) ?? []);
    });

    return dataLoader.load(tagId);
  }

  private async findByIdOrThrow(id: bigint) {
    const [result] = await this.drizzleService.db
      .select()
      .from(posts)
      .where(eq(posts.id, id))
      .execute();

    if (!result) {
      throw new NotFoundException();
    }

    return result;
  }

  async findAll(filter: PostsFilter, user: IdentityUser) {
    const andWhere: Array<SQLWrapper> = [inArray(posts.type, filter.type)];

    if (
      !user?.roles.includes(enums.Auth0Role.Administrator) ||
      !filter.includeUnpublished
    ) {
      andWhere.push(eq(posts.isPublish, true));
    }

    const result = await this.drizzleService.db
      .select()
      .from(posts)
      .where(and(...andWhere))
      .orderBy(posts.id)
      .offset(filter.offset)
      .limit(filter.limit)
      .execute();

    return result;
  }

  async findById(id: bigint, user: IdentityUser) {
    const result = await this.findByIdOrThrow(id);

    if (
      !user?.roles.includes(enums.Auth0Role.Administrator) &&
      !result.isPublish
    ) {
      throw new NotFoundException();
    }

    return result;
  }

  async create(data: CreatePost, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .insert(posts)
      .values({
        ...data,
        ...this.drizzleService.createFields(user),
      })
      .returning()
      .execute();

    return result;
  }

  async update(id: bigint, data: UpdatePost, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .update(posts)
      .set({
        ...data,
        ...this.drizzleService.updatedFields(user),
      })
      .where(eq(posts.id, id))
      .returning()
      .execute();

    return result;
  }

  async delete(id: bigint) {
    const [result] = await this.drizzleService.db
      .delete(posts)
      .where(eq(posts.id, id))
      .returning()
      .execute();

    return result;
  }
}
