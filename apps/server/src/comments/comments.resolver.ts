import { forwardRef, Inject } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { EntityName } from 'src/graphql/models';
import { BigIntScalar } from 'src/graphql/scalars';
import { PostsService } from 'src/posts/posts.service';
import { Post } from 'src/posts/types';
import { ReactionsService } from 'src/reactions/reactions.service';
import { TagsService } from 'src/tags/tags.service';
import { Auth0User } from 'src/users/types';
import { UsersService } from 'src/users/users.service';

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
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  @ResolveField(() => Auth0User)
  async createdUser(@Parent() parent: Comment) {
    return this.usersService.loadUserById(parent.createdBy);
  }

  @ResolveField(() => Auth0User)
  async updatedUser(@Parent() parent: Comment) {
    return this.usersService.loadUserById(parent.updatedBy);
  }

  @ResolveField(() => Post)
  async post(@Parent() parent: Comment) {
    return this.postsService.loadPostById(parent.postId);
  }

  @ResolveField(() => Post)
  async tags(@Parent() parent: Comment) {
    return this.tagsService.loadTagsByEntityId(EntityName.COMMENT, parent.id);
  }

  @ResolveField(() => Post)
  async reactions(@Parent() parent: Comment) {
    return this.reactionsService.loadRectionsByEntityId(
      EntityName.COMMENT,
      parent.id,
    );
  }

  @Query(() => [Comment])
  async comments() {}

  @Query(() => Comment)
  async comment(@Args('id', { type: () => BigIntScalar }) id: bigint) {}

  @Mutation(() => Comment)
  async createComment() {}

  @Mutation(() => Comment)
  async updateComment() {}

  @Mutation(() => Comment)
  async deleteComment() {}
}
