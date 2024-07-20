import { forwardRef, Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CommentsService } from 'src/comments/comments.service';
import { ReactionsService } from 'src/reactions/reactions.service';
import { TagsService } from 'src/tags/tags.service';

import { PostsService } from './posts.service';
import { Post } from './types';

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    @Inject(forwardRef(() => CommentsService))
    private readonly commentsService: CommentsService,
    @Inject(forwardRef(() => TagsService))
    private readonly tagsService: TagsService,
    @Inject(forwardRef(() => ReactionsService))
    private readonly reactionsService: ReactionsService,
  ) {}

  @Query(() => Post)
  async post() {}
}
