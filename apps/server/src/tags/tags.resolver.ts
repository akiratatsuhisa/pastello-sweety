import { forwardRef, Inject, Post } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { IdentityUser, Public, User } from 'src/auth/decorators';
import { CommentsService } from 'src/comments/comments.service';
import { Comment } from 'src/comments/types';
import { PaginationFilter } from 'src/graphql/models';
import { BigIntScalar } from 'src/graphql/scalars';
import { PostsService } from 'src/posts/posts.service';
import { Auth0User } from 'src/users/types';
import { UsersService } from 'src/users/users.service';

import { TagsService } from './tags.service';
import {
  AddTag,
  CreateTag,
  RemoveTag,
  Tag,
  TagRelation,
  UpdateTag,
} from './types';

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

  @ResolveField(() => [Post])
  async posts(@Parent() parent: Tag, @Args() args: PaginationFilter) {
    return this.postsService.loadPostsByTagId(parent.id, args);
  }

  @ResolveField(() => [Comment])
  async comments(@Parent() parent: Tag, @Args() args: PaginationFilter) {
    return this.commentsService.loadCommentsByTagId(parent.id, args);
  }

  @Public()
  @Query(() => [Tag])
  async tags(@Args() args: PaginationFilter) {
    return this.tagsService.findAll(args);
  }

  @Public()
  @Query(() => Tag)
  async tag(@Args('id', { type: () => BigIntScalar }) id: bigint) {
    return this.tagsService.findById(id);
  }

  @Mutation(() => Tag)
  async createTag(@Args('input') input: CreateTag, @User() user: IdentityUser) {
    return this.tagsService.create(input, user);
  }

  @Mutation(() => Tag)
  async updateTag(
    @Args('id', { type: () => BigIntScalar }) id: bigint,
    @Args('input') input: UpdateTag,
    @User() user: IdentityUser,
  ) {
    return this.tagsService.update(id, input, user);
  }

  @Mutation(() => Tag)
  async deleteTag(@Args('id', { type: () => BigIntScalar }) id: bigint) {
    return this.tagsService.delete(id);
  }

  @Mutation(() => TagRelation)
  async addTag(@Args() args: AddTag, @User() user: IdentityUser) {
    return this.tagsService.add(args, user);
  }

  @Mutation(() => TagRelation)
  async removeTag(@Args() args: RemoveTag) {
    return this.tagsService.remove(args);
  }
}
