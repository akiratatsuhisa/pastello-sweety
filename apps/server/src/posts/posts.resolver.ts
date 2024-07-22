import { forwardRef, Inject } from '@nestjs/common';
import {
  Args,
  Extensions,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Public, Roles, User } from 'src/auth/decorators';
import { IdentityUser } from 'src/auth/identity.class';
import { CommentsService } from 'src/comments/comments.service';
import { Comment } from 'src/comments/types';
import { roleMiddleware } from 'src/graphql/middlewares';
import { EntityName, PaginationFilter } from 'src/graphql/models';
import { BigIntScalar } from 'src/graphql/scalars';
import { ReactionsService } from 'src/reactions/reactions.service';
import { Reaction } from 'src/reactions/types';
import { TagsService } from 'src/tags/tags.service';
import { Tag } from 'src/tags/types';
import { Auth0User } from 'src/users/types';
import { UsersService } from 'src/users/users.service';
import { enums } from 'utils';

import { PostsService } from './posts.service';
import { CreatePost, Post, PostsFilter, UpdatePost } from './types';

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
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  @ResolveField(() => Auth0User)
  async createdUser(@Parent() parent: Post) {
    return this.usersService.loadUserById(parent.createdBy);
  }

  @ResolveField(() => Auth0User)
  async updatedUser(@Parent() parent: Post) {
    return this.usersService.loadUserById(parent.updatedBy);
  }

  @Extensions({ roles: [enums.Auth0Role.Administrator] })
  @ResolveField(() => [Comment], { middleware: [roleMiddleware] })
  async comments(@Parent() parent: Post, @Args() args: PaginationFilter) {
    return this.commentsService.loadCommentsByPostId(parent.id, args);
  }

  @Extensions({ roles: [enums.Auth0Role.Administrator] })
  @ResolveField(() => [Tag], { middleware: [roleMiddleware] })
  async tags(@Parent() parent: Post, @Args() args: PaginationFilter) {
    return this.tagsService.loadTagsByEntityId(
      EntityName.POST,
      parent.id,
      args,
    );
  }

  @Extensions({ roles: [enums.Auth0Role.Administrator] })
  @ResolveField(() => [Reaction], { middleware: [roleMiddleware] })
  async reactions(@Parent() parent: Post, @Args() args: PaginationFilter) {
    return this.reactionsService.loadRectionsByEntityId(
      EntityName.POST,
      parent.id,
      args,
    );
  }

  @Public()
  @Query(() => [Post])
  async posts(@Args() args: PostsFilter, @User() user: IdentityUser) {
    return this.postsService.findAll(args, user);
  }

  @Public()
  @Query(() => Post)
  async post(
    @Args('id', { type: () => BigIntScalar }) id: bigint,
    @User() user: IdentityUser,
  ) {
    return this.postsService.findById(id, user);
  }

  @Roles(enums.Auth0Role.Administrator)
  @Mutation(() => Post)
  async createPost(
    @Args('input') input: CreatePost,
    @User() user: IdentityUser,
  ) {
    return this.postsService.create(input, user);
  }

  @Roles(enums.Auth0Role.Administrator)
  @Mutation(() => Post)
  async updatePost(
    @Args('id', { type: () => BigIntScalar }) id: bigint,
    @Args('input') input: UpdatePost,
    @User() user: IdentityUser,
  ) {
    return this.postsService.update(id, input, user);
  }

  @Roles(enums.Auth0Role.Administrator)
  @Mutation(() => Post)
  async deletePost(@Args('id', { type: () => BigIntScalar }) id: bigint) {
    return this.postsService.delete(id);
  }
}
