import { Provider } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwksAuthGuard, PermissionsGuard, RolesGuard } from 'src/auth/guards';

import { BigIntScalar } from './graphql/scalars';

export const appProviders: Array<Provider> = [
  BigIntScalar,
  {
    provide: APP_GUARD,
    useClass: JwksAuthGuard,
  },
  {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },
  {
    provide: APP_GUARD,
    useClass: PermissionsGuard,
  },
];
