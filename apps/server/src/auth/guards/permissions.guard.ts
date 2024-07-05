import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { IncomingMessage } from 'http';
import { enums } from 'utils';

import { IdentityUser, IS_PUBLIC_KEY, PERMISSIONS_KEY } from '../decorators';

@Injectable()
export class PermissionsGuard implements CanActivate {
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

    const requiredPermissions = this.reflector.getAllAndOverride<
      Array<enums.Auth0Permission>
    >(PERMISSIONS_KEY, [context.getHandler(), context.getClass()]);

    if (!requiredPermissions) {
      return true;
    }

    if (
      requiredPermissions.some((permission) =>
        user.permissions?.includes(permission),
      )
    ) {
      return true;
    }

    throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
  }
}
