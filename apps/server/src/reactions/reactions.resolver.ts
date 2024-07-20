import { forwardRef, Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CommentsService } from 'src/comments/comments.service';
import { PostsService } from 'src/posts/posts.service';

import { ReactionsService } from './reactions.service';
import { Reaction } from './types';

@Resolver(() => Reaction)
export class ReactionsResolver {
  constructor(
    private readonly reactionsService: ReactionsService,
    @Inject(forwardRef(() => PostsService))
    private readonly postsService: PostsService,
    @Inject(forwardRef(() => CommentsService))
    private readonly commentsService: CommentsService,
  ) {}

  @Query(() => Reaction)
  async reaction() {}
}
