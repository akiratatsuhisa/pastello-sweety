import { forwardRef, Inject } from '@nestjs/common';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { IdentityUser, User } from 'src/auth/decorators';
import { CommentsService } from 'src/comments/comments.service';
import { EntityName } from 'src/graphql/models';
import { EntityUnion } from 'src/graphql/models/entity.interface';
import { PostsService } from 'src/posts/posts.service';
import { Auth0User } from 'src/users/types';
import { UsersService } from 'src/users/users.service';
import { enums } from 'utils';

import { TagRelation } from './types';

@Resolver(() => TagRelation)
export class TagRelationsResolver {
  constructor(
    @Inject(forwardRef(() => PostsService))
    private readonly postsService: PostsService,
    @Inject(forwardRef(() => CommentsService))
    private readonly commentsService: CommentsService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  @ResolveField(() => Auth0User)
  async createdUser(@Parent() parent: TagRelation) {
    return this.usersService.loadUserById(parent.createdBy);
  }

  @ResolveField(() => Auth0User)
  async updatedUser(@Parent() parent: TagRelation) {
    return this.usersService.loadUserById(parent.updatedBy);
  }

  @ResolveField(() => EntityUnion, { nullable: true })
  async entity(@Parent() parent: TagRelation, @User() user: IdentityUser) {
    const isPublishedOnly =
      !user?.roles.includes(enums.Auth0Role.Administrator) ?? true;

    switch (parent.entityName) {
      case EntityName.POST:
        return this.postsService.loadPostById(parent.entityId, isPublishedOnly);
      case EntityName.COMMENT:
        return this.commentsService.loadCommentById(
          parent.entityId,
          isPublishedOnly,
        );
      default:
        return null;
    }
  }
}
