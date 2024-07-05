import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy, StrategyOptionsWithRequest } from 'passport-jwt';

import { AuthService } from '../auth.service';

@Injectable()
export class JwksStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    const options: StrategyOptionsWithRequest = {
      passReqToCallback: true,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${configService.get<string>('OAUTH_DOMAIN')}/.well-known/jwks.json`,
      }),
      audience: configService.get<string>('OAUTH_AUDIENCE'),
      issuer: `${configService.get<string>('OAUTH_DOMAIN')}/`,
      algorithms: ['RS256'],
    };

    super(options);
  }

  async validate(req: Request, payload: Record<string, any>) {
    return this.authService.getUserInfo(req.headers['authorization'], payload);
  }
}
