import { Query, Resolver } from '@nestjs/graphql';

import { Public } from './auth/decorators';

@Resolver()
export class AppResolver {
  @Public()
  @Query(() => String)
  ping() {
    return 'ping';
  }
}
