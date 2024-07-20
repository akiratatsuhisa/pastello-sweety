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
import { CommentsService } from 'src/comments/comments.service';
import { BigIntScalar } from 'src/graphql/scalars';
import { PostsService } from 'src/posts/posts.service';
import { Auth0User } from 'src/users/types';
import { UsersService } from 'src/users/users.service';

import { TagsService } from './tags.service';
import { CreateTag, Tag, UpdateTag } from './types';

@Resolver(() => Tag)
export class TagsResolver {
  constructor(
    private readonly tagsService: TagsService,
    @Inject(forwardRef(() => PostsService))
    private readonly postsService: PostsService,
    @Inject(forwardRef(() => CommentsService))
    private readonly commentsService: CommentsService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  @ResolveField(() => Auth0User)
  async createdUser(@Parent() parent: Tag) {
    return this.usersService.loadUserById(parent.createdBy);
  }

  @ResolveField(() => Auth0User)
  async updatedUser(@Parent() parent: Tag) {
    return this.usersService.loadUserById(parent.updatedBy);
  }

  @ResolveField(() => Auth0User)
  async posts(@Parent() parent: Tag) {
    return this.postsService.loadPostsByTagId(parent.id);
  }

  @ResolveField(() => Auth0User)
  async comments(@Parent() parent: Tag) {
    return this.commentsService.loadCommentsByTagId(parent.id);
  }

  @Query(() => [Tag])
  async tags() {
    return this.tagsService.findAll();
  }

  @Query(() => Tag)
  async tag(@Args('id', { type: () => BigIntScalar }) id: bigint) {
    return this.tagsService.findById(id);
  }

  @Mutation(() => Tag)
  async createTag(
    @Args('input', { type: () => CreateTag }) input: CreateTag,
    @User() user: IdentityUser,
  ) {
    return this.tagsService.create(input, user);
  }

  @Mutation(() => Tag)
  async updateTag(
    @Args('id', { type: () => BigIntScalar }) id: bigint,
    @Args('input', { type: () => UpdateTag }) input: UpdateTag,
    @User() user: IdentityUser,
  ) {
    return this.tagsService.update(id, input, user);
  }

  @Mutation(() => Tag)
  async deleteTag(@Args('id', { type: () => BigIntScalar }) id: bigint) {
    return this.tagsService.delete(id);
  }
}
