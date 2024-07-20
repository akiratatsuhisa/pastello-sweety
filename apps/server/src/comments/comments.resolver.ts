import { forwardRef, Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { PostsService } from 'src/posts/posts.service';
import { ReactionsService } from 'src/reactions/reactions.service';
import { TagsService } from 'src/tags/tags.service';

import { CommentsService } from './comments.service';
import { Comment } from './types';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(
    private readonly commentsService: CommentsService,
    @Inject(forwardRef(() => PostsService))
    private readonly postsService: PostsService,
    @Inject(forwardRef(() => TagsService))
    private readonly tagsService: TagsService,
    @Inject(forwardRef(() => ReactionsService))
    private readonly reactionsService: ReactionsService,
  ) {}

  @Query(() => Comment)
  async comment() {}
}
