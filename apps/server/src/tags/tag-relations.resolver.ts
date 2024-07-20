import { forwardRef, Inject } from '@nestjs/common';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CommentsService } from 'src/comments/comments.service';
import { EntityName } from 'src/graphql/models';
import { EntityUnion } from 'src/graphql/models/entity.interface';
import { PostsService } from 'src/posts/posts.service';
import { Auth0User } from 'src/users/types';
import { UsersService } from 'src/users/users.service';

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

  @ResolveField(() => EntityUnion)
  async entity(@Parent() parent: TagRelation) {
    switch (parent.entityName) {
      case EntityName.POST:
        return this.postsService.loadPostById(parent.entityId);
      case EntityName.COMMENT:
        return this.commentsService.loadCommentById(parent.entityId);
      default:
        return null;
    }
  }
}
