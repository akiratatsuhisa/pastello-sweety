import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { IncomingMessage } from 'http';

import { IdentityUser, IS_PUBLIC_KEY } from '../decorators';

@Injectable()
export class JwksAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  getRequest(context: ExecutionContext): IncomingMessage {
    const ctx = GqlExecutionContext.create(context);
    const request: IncomingMessage = ctx.getContext().req;
    return request;
  }

  handleRequest(
    err: unknown,
    user: IdentityUser,
    _info: unknown,
    context: ExecutionContext,
  ) {
    const isPublic =
      this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) ?? false;

    if (isPublic && !user) {
      return null;
    }

    if (err || !user) {
      throw new UnauthorizedException();
    }

    return user as any;
  }
}
