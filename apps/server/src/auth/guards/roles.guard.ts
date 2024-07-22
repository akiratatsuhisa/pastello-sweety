import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { IncomingMessage } from 'http';
import { enums } from 'utils';

import { IdentityUser, IS_PUBLIC_KEY, ROLES_KEY } from '../decorators';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  getRequest(context: ExecutionContext): IncomingMessage {
    const ctx = GqlExecutionContext.create(context);
    const request: IncomingMessage = ctx.getContext().req;
    return request;
  }

  canActivate(context: ExecutionContext): boolean {
    const { user } = this.getRequest(context) as IncomingMessage & {
      user: IdentityUser | null;
    };

    const isPublic =
      this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) ?? false;

    if (isPublic && !user) {
      return true;
    }

    const requiredRoles = this.reflector.getAllAndOverride<
      Array<enums.Auth0Role>
    >(ROLES_KEY, [context.getHandler(), context.getClass()]);

    if (!requiredRoles) {
      return true;
    }

    if (requiredRoles.some((role) => user.roles?.includes(role))) {
      return true;
    }

    throw new ForbiddenException();
  }
}
