import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { IdentityUser } from '../identity.class';

export { IdentityUser };

export const User = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const user: IdentityUser = ctx.getContext().req.user;

    return data ? user?.[data] : user;
  },
);
