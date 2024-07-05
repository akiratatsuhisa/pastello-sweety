import { HttpException, HttpStatus } from '@nestjs/common';
import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';
import { IdentityUser } from 'src/auth/identity.class';
import { enums } from 'utils';

/**
 * By using decortor Extensions({roles: ["Administrator", "U"] })
 * @param {MiddlewareContext} ctx
 * @param {NextFn} next
 * @returns
 */
export const roleMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const { info, context } = ctx;
  const { extensions } = info.parentType.getFields()[info.fieldName];

  const requiredRoles: Array<enums.Auth0Role> =
    (extensions.roles as Array<enums.Auth0Role>) ?? [];

  if (!requiredRoles.length) {
    return next();
  }

  const user: IdentityUser = context.req.user;

  if (requiredRoles.some((role) => user.roles?.includes(role))) {
    return next();
  }

  throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
};
