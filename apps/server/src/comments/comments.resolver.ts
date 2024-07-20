import { forwardRef, Inject } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { IdentityUser, User } from 'src/auth/decorators';
import { EntityName } from 'src/graphql/models';
import { BigIntScalar } from 'src/graphql/scalars';
import { PostsService } from 'src/posts/posts.service';
import { Post } from 'src/posts/types';
import { ReactionsService } from 'src/reactions/reactions.service';
import { Reaction } from 'src/reactions/types';
import { TagsService } from 'src/tags/tags.service';
import { Tag } from 'src/tags/types';
import { Auth0User } from 'src/users/types';
import { UsersService } from 'src/users/users.service';

import { CommentsService } from './comments.service';
import { Comment, CreateComment, UpdateComment } from './types';

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

  @ResolveField(() => Tag)
  async tags(@Parent() parent: Comment) {
    return this.tagsService.loadTagsByEntityId(EntityName.COMMENT, parent.id);
  }

  @ResolveField(() => [Reaction])
  async reactions(@Parent() parent: Comment) {
    return this.reactionsService.loadRectionsByEntityId(
      EntityName.COMMENT,
      parent.id,
    );
  }

  @ResolveField(() => Comment, { nullable: true })
  async parent(@Parent() parent: Comment) {
    return this.commentsService.loadParent(parent.parentId);
  }

  @ResolveField(() => [Comment])
  async children(@Parent() parent: Comment) {
    return this.commentsService.loadChildren(parent.id);
  }

  @Query(() => [Comment])
  async comments() {
    return this.commentsService.findAll();
  }

  @Query(() => Comment)
  async comment(@Args('id', { type: () => BigIntScalar }) id: bigint) {
    return this.commentsService.findById(id);
  }

  @Mutation(() => Comment)
  async createComment(
    @Args('input') input: CreateComment,
    @User() user: IdentityUser,
  ) {
    return this.commentsService.create(input, user);
  }

  @Mutation(() => Comment)
  async updateComment(
    @Args('id', { type: () => BigIntScalar }) id: bigint,
    @Args('input') input: UpdateComment,
    @User() user: IdentityUser,
  ) {
    return this.commentsService.update(id, input, user);
  }

  @Mutation(() => Comment)
  async deleteComment(@Args('id', { type: () => BigIntScalar }) id: bigint) {
    return this.commentsService.delete(id);
  }
}
