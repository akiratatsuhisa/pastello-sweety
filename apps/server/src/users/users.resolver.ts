import { Args, Query, Resolver } from '@nestjs/graphql';

import { User } from './types';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => User)
  async user(@Args('id', { type: () => String }) id: string) {
    return this.userService.loadUserById(id);
  }
}
