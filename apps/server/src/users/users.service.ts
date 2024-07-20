import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ManagementClient } from 'auth0';
import _ from 'lodash';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { FilterProps } from 'src/data-loader/data-loader.types';

import { User } from './types';

const LIMIT = 100;

@Injectable()
export class UsersService {
  private readonly management: ManagementClient;

  constructor(
    configService: ConfigService,
    private readonly dataLoaderService: DataLoaderService,
  ) {
    this.management = new ManagementClient({
      domain: configService.get<string>('OAUTH_DOMAIN').replace('https://', ''),
      clientId: configService.get<string>('AUTH0_MANAGEMENT_CLIENT_ID'),
      clientSecret: configService.get<string>('AUTH0_MANAGEMENT_CLIENT_SECRET'),
    });
  }

  async loadUserById(id: string) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterProps,
      string,
      User
    >({ __key: 'user' }, async (keys) => {
      const chunkResult = await Promise.all(
        _.chunk(keys, LIMIT).map(async (userIds) => {
          const res = await this.management.users.getAll({
            q: `user_id: ${userIds.map((id) => `"${id}"`).join(' ')}`,
            per_page: 100,
            fields:
              'user_id,username,picture,name,nickname,given_name,family_name',
            include_fields: true,
          });

          return res.data;
        }),
      );

      const mapResult = _.flatten(chunkResult).reduce((map, result) => {
        const user = new User();

        user.id = result.user_id;
        user.username = result.username;
        user.picture = result.picture;
        user.name = result.name;
        user.nickname = result.nickname;
        user.givenName = result.given_name;
        user.familyName = result.family_name;

        map.set(result.user_id, user);

        return map;
      }, new Map<string, User>());

      return keys.map((key) => mapResult.get(key));
    });

    return dataLoader.load(id);
  }
}
