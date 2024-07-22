import { forwardRef, Inject } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { IdentityUser, User } from 'src/auth/decorators';
import { CommentsService } from 'src/comments/comments.service';
import { EntityName } from 'src/graphql/models';
import { EntityUnion } from 'src/graphql/models/entity.interface';
import { PostsService } from 'src/posts/posts.service';
import { Auth0User } from 'src/users/types';
import { UsersService } from 'src/users/users.service';
import { enums } from 'utils';

import { ReactionsService } from './reactions.service';
import { DeleteReaction, Reaction, UpsertReaction } from './types';

@Resolver(() => Reaction)
export class ReactionsResolver {
  constructor(
    private readonly reactionsService: ReactionsService,
    @Inject(forwardRef(() => PostsService))
    private readonly postsService: PostsService,
    @Inject(forwardRef(() => CommentsService))
    private readonly commentsService: CommentsService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  @ResolveField(() => Auth0User)
  async createdUser(@Parent() parent: Reaction) {
    return this.usersService.loadUserById(parent.createdBy);
  }

  @ResolveField(() => Auth0User)
  async updatedUser(@Parent() parent: Reaction) {
    return this.usersService.loadUserById(parent.updatedBy);
  }

  @ResolveField(() => EntityUnion, { nullable: true })
  async entity(@Parent() parent: Reaction, @User() user: IdentityUser) {
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

  @Mutation(() => Reaction)
  async upsertReaction(
    @Args() args: UpsertReaction,
    @User() user: IdentityUser,
  ) {
    return this.reactionsService.upsert(args, user);
  }

  @Mutation(() => Reaction)
  async deleteReaction(
    @Args() args: DeleteReaction,
    @User() user: IdentityUser,
  ) {
    return this.reactionsService.delete(args, user);
  }
}
