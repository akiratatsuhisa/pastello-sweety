import { HttpService } from '@nestjs/axios';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import dayjs from 'dayjs';

import { IdentityUser } from './identity.class';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async getUserInfo(
    token: string,
    payload: Record<string, any>,
  ): Promise<IdentityUser | null> {
    const key = `AUTH0_USER_INFO:${token.split('.').at(2)}`;
    const cache = await this.cacheManager.get<string>(key);

    if (cache) {
      return new IdentityUser(JSON.parse(cache));
    }

    try {
      const response = await this.httpService.axiosRef.get(
        `${this.configService.get<string>('OAUTH_DOMAIN')}/userinfo`,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      const result = new IdentityUser(Object.assign(payload, response.data));

      await this.cacheManager.set(
        key,
        JSON.stringify(result),
        dayjs(payload.exp * 1000).diff(),
      );

      return result;
    } catch {
      return null;
    }
  }
}
