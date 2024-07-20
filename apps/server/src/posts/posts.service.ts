import { Injectable, NotFoundException } from '@nestjs/common';
import { and, eq, inArray } from 'drizzle-orm';
import { IdentityUser } from 'src/auth/identity.class';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { FilterProps } from 'src/data-loader/data-loader.types';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { EntityName } from 'src/graphql/models';
import { posts, tagRelationships } from 'src/schema';

import { CreatePost, Post, UpdatePost } from './types';

@Injectable()
export class PostsService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly dataLoaderService: DataLoaderService,
  ) {}

  async loadPostById(id: bigint) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterProps,
      bigint,
      Post
    >({ __key: 'loadPostById' }, async (keys) => {
      const result = await this.drizzleService.db
        .select()
        .from(posts)
        .where(inArray(posts.id, [...keys]))
        .execute();

      const mapResult = result.reduce((map, result) => {
        map.set(result.id, result as Post);
        return map;
      }, new Map<bigint, Post>());

      return keys.map((key) => mapResult.get(key));
    });

    return dataLoader.load(id);
  }

  async loadPostsByTagId(tagId: bigint) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterProps,
      bigint,
      Array<Post>
    >({ __key: 'loadPostsByTagId' }, async (keys) => {
      const result = await this.drizzleService.db
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
        })
        .from(posts)
        .leftJoin(
          tagRelationships,
          and(
            eq(tagRelationships.entityName, EntityName.POST),
            eq(tagRelationships.entityId, posts.id),
          ),
        )
        .where(inArray(tagRelationships.tagId, [...keys]))
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

  async findAll() {
    const result = await this.drizzleService.db
      .select()
      .from(posts)
      .orderBy(posts.id)
      .execute();

    return result;
  }

  async findById(id: bigint) {
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
