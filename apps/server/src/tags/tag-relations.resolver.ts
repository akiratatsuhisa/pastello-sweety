import { forwardRef, Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CommentsService } from 'src/comments/comments.service';
import { PostsService } from 'src/posts/posts.service';

import { TagsService } from './tags.service';
import { TagRelation } from './types';

@Resolver(() => TagRelation)
export class TagRelationsResolver {
  constructor(
    private readonly tagsService: TagsService,
    @Inject(forwardRef(() => PostsService))
    private readonly postsService: PostsService,
    @Inject(forwardRef(() => CommentsService))
    private readonly commentsService: CommentsService,
  ) {}

  @Query(() => TagRelation)
  async tagRelation() {}
}
