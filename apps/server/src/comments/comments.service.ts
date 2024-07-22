import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { and, eq, gt, inArray, isNull, lte, sql } from 'drizzle-orm';
import { IdentityUser } from 'src/auth/identity.class';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { FilterKey, rowNumerAlias } from 'src/data-loader/data-loader.types';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { EntityName, PaginationFilter } from 'src/graphql/models';
import { comments, posts, tagRelationships } from 'src/schema';
import { enums } from 'utils';

import { Comment, CommentsFilter, CreateComment, UpdateComment } from './types';

const commentsSelectAllFields = {
  id: comments.id,
  postId: comments.postId,
  parentId: comments.parentId,
  content: comments.content,
  createdBy: comments.createdBy,
  createdAt: comments.createdAt,
  updatedBy: comments.updatedBy,
  updatedAt: comments.updatedAt,
};

@Injectable()
export class CommentsService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly dataLoaderService: DataLoaderService,
  ) {}

  async loadCommentById(id: bigint, isPublishedOnly: boolean) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterKey,
      bigint,
      Comment
    >({ __key: 'loadCommentById', isPublishedOnly }, async (keys) => {
      const result = await this.drizzleService.db
        .select(commentsSelectAllFields)
        .from(comments)
        .leftJoin(posts, eq(posts.id, comments.postId))
        .where(
          and(
            inArray(comments.id, [...keys]),
            isPublishedOnly ? eq(posts.isPublish, true) : undefined,
          ),
        )
        .execute();

      const mapResult = result.reduce((map, result) => {
        map.set(result.id, result as Comment);
        return map;
      }, new Map<bigint, Comment>());

      return keys.map((key) => mapResult.get(key));
    });

    return dataLoader.load(id);
  }

  async loadCommentsByTagId(tagId: bigint, filter: PaginationFilter) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterKey<PaginationFilter>,
      bigint,
      Array<Comment>
    >({ __key: 'loadCommentsByTagId', ...filter }, async (keys) => {
      const rankedComments = this.drizzleService.db.$with('ranked_comments').as(
        this.drizzleService.db
          .select({
            ...commentsSelectAllFields,
            tagId: tagRelationships.tagId,
            rowNumber:
              sql`ROW_NUMBER() OVER (PARTITION BY ${tagRelationships.tagId} ORDER BY ${tagRelationships.id})`.as(
                rowNumerAlias,
              ),
          })
          .from(comments)
          .leftJoin(
            tagRelationships,
            and(
              eq(tagRelationships.entityName, EntityName.COMMENT),
              eq(tagRelationships.entityId, comments.id),
            ),
          )
          .where(inArray(tagRelationships.tagId, [...keys])),
      );

      const result = await this.drizzleService.db
        .with(rankedComments)
        .select()
        .from(rankedComments)
        .where(
          and(
            gt(rankedComments.rowNumber, filter.offset),
            lte(rankedComments.rowNumber, filter.limit),
          ),
        )
        .execute();

      const mapResult = result.reduce((map, result) => {
        if (map.has(result.tagId)) {
          map.get(result.tagId).push(result as unknown as Comment);
        } else {
          map.set(result.tagId, [result as unknown as Comment]);
        }
        return map;
      }, new Map<bigint, Array<Comment>>());

      return keys.map((key) => mapResult.get(key) ?? []);
    });

    return dataLoader.load(tagId);
  }

  async loadCommentsByPostId(postId: bigint, filter: PaginationFilter) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterKey<PaginationFilter>,
      bigint,
      Array<Comment>
    >({ __key: 'loadCommentsByPostId', ...filter }, async (keys) => {
      const rankedComments = this.drizzleService.db.$with('ranked_comments').as(
        this.drizzleService.db
          .select({
            id: comments.id,
            postId: comments.postId,
            parentId: comments.parentId,
            content: comments.content,
            createdBy: comments.createdBy,
            createdAt: comments.createdAt,
            updatedBy: comments.updatedBy,
            updatedAt: comments.updatedAt,
            rowNumber:
              sql`ROW_NUMBER() OVER (PARTITION BY ${comments.postId} ORDER BY ${comments.id})`.as(
                rowNumerAlias,
              ),
          })
          .from(comments)
          .where(
            and(isNull(comments.parentId), inArray(comments.postId, [...keys])),
          ),
      );

      const result = await this.drizzleService.db
        .with(rankedComments)
        .select()
        .from(rankedComments)
        .where(
          and(
            gt(rankedComments.rowNumber, filter.offset),
            lte(rankedComments.rowNumber, filter.limit),
          ),
        )
        .execute();

      const mapResult = result.reduce((map, result) => {
        if (map.has(result.postId)) {
          map.get(result.postId).push(result as unknown as Comment);
        } else {
          map.set(result.postId, [result as unknown as Comment]);
        }
        return map;
      }, new Map<bigint, Array<Comment>>());

      return keys.map((key) => mapResult.get(key) ?? []);
    });

    return dataLoader.load(postId);
  }

  async loadParent(id: bigint) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterKey,
      bigint,
      Comment
    >({ __key: 'loadParent' }, async (keys) => {
      const result = await this.drizzleService.db
        .select()
        .from(comments)
        .where(inArray(comments.id, [...keys]))
        .execute();

      const mapResult = result.reduce((map, result) => {
        map.set(result.id, result as Comment);
        return map;
      }, new Map<bigint, Comment>());

      return keys.map((key) => mapResult.get(key) ?? null);
    });

    return dataLoader.load(id);
  }

  async loadChildren(id: bigint, filter: PaginationFilter) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterKey<PaginationFilter>,
      bigint,
      Array<Comment>
    >({ __key: 'loadChildren', ...filter }, async (keys) => {
      const rankedComments = this.drizzleService.db.$with('ranked_comments').as(
        this.drizzleService.db
          .select({
            id: comments.id,
            postId: comments.postId,
            parentId: comments.parentId,
            content: comments.content,
            createdBy: comments.createdBy,
            createdAt: comments.createdAt,
            updatedBy: comments.updatedBy,
            updatedAt: comments.updatedAt,
            rowNumber:
              sql`ROW_NUMBER() OVER (PARTITION BY ${comments.parentId} ORDER BY ${comments.id})`.as(
                rowNumerAlias,
              ),
          })
          .from(comments)
          .where(inArray(comments.parentId, [...keys])),
      );

      const result = await this.drizzleService.db
        .with(rankedComments)
        .select()
        .from(rankedComments)
        .where(
          and(
            gt(rankedComments.rowNumber, filter.offset),
            lte(rankedComments.rowNumber, filter.limit),
          ),
        )
        .execute();

      const mapResult = result.reduce((map, result) => {
        if (map.has(result.parentId)) {
          map.get(result.parentId).push(result as unknown as Comment);
        } else {
          map.set(result.parentId, [result as unknown as Comment]);
        }
        return map;
      }, new Map<bigint, Array<Comment>>());

      return keys.map((key) => mapResult.get(key) ?? []);
    });

    return dataLoader.load(id);
  }

  private async findByIdOrThrow(id: bigint) {
    const [result] = await this.drizzleService.db
      .select()
      .from(comments)
      .where(eq(comments.id, id))
      .execute();

    if (!result) {
      throw new NotFoundException();
    }

    return result;
  }

  async findAll(filter: CommentsFilter, user: IdentityUser) {
    const result = await this.drizzleService.db
      .select(commentsSelectAllFields)
      .from(comments)
      .leftJoin(posts, eq(posts.id, comments.postId))
      .where(
        and(
          eq(comments.postId, filter.postId),
          filter.includeUnpublished &&
            user?.roles.includes(enums.Auth0Role.Administrator)
            ? undefined
            : eq(posts.isPublish, true),
        ),
      )
      .orderBy(comments.id)
      .offset(filter.offset)
      .limit(filter.limit)
      .execute();

    return result;
  }

  async findById(id: bigint, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .select(commentsSelectAllFields)
      .from(comments)
      .leftJoin(posts, eq(posts.id, comments.postId))
      .where(
        and(
          eq(comments.id, id),
          user?.roles.includes(enums.Auth0Role.Administrator)
            ? undefined
            : eq(posts.isPublish, true),
        ),
      )
      .execute();

    if (!result) {
      throw new NotFoundException();
    }

    return result;
  }

  async create(data: CreateComment, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .insert(comments)
      .values({
        ...data,
        ...this.drizzleService.createFields(user),
      })
      .returning()
      .execute();

    return result;
  }

  async update(id: bigint, data: UpdateComment, user: IdentityUser) {
    const dataInDb = await this.findByIdOrThrow(id);

    if (dataInDb.createdBy !== user.sub) {
      throw new ForbiddenException();
    }

    const [result] = await this.drizzleService.db
      .update(comments)
      .set({
        ...data,
        ...this.drizzleService.updatedFields(user),
      })
      .where(eq(comments.id, id))
      .returning()
      .execute();

    return result;
  }

  async delete(id: bigint, user: IdentityUser) {
    const dataInDb = await this.findByIdOrThrow(id);

    if (
      !user.roles.includes(enums.Auth0Role.Administrator) &&
      dataInDb.createdBy !== user.sub
    ) {
      throw new ForbiddenException();
    }

    const [result] = await this.drizzleService.db
      .delete(comments)
      .where(eq(comments.id, id))
      .returning()
      .execute();

    return result;
  }
}
