import { Injectable } from '@nestjs/common';
import { and, eq, inArray } from 'drizzle-orm';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { FilterProps } from 'src/data-loader/data-loader.types';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { posts, tagRelationships } from 'src/schema';

import { Post } from './types';

@Injectable()
export class PostsService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly dataLoaderService: DataLoaderService,
  ) {}

  async loadPostsByTagId(tagId: bigint) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterProps,
      bigint,
      Array<Post>
    >({ __key: `posts:tag` }, async (keys) => {
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
            eq(tagRelationships.entityName, 'post'),
            eq(tagRelationships.entityId, posts.id),
          ),
        )
        .where(inArray(tagRelationships.tagId, [...keys]));

      return keys.map(
        (key) =>
          result.filter((post) => post.tagId === key) as unknown as Array<Post>,
      );
    });

    return dataLoader.load(tagId);
  }
}
