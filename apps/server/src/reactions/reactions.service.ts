import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { FilterProps } from 'src/data-loader/data-loader.types';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { reactions } from 'src/schema';

import { Reaction } from './types';

@Injectable()
export class ReactionsService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly dataLoaderService: DataLoaderService,
  ) {}

  async loadRectionsByPostId(postId: bigint) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterProps,
      bigint,
      Array<Reaction>
    >({ __key: 'loadRectionsByPostId' }, async (keys) => {
      const result = await this.drizzleService.db
        .select()
        .from(reactions)
        .where(eq(reactions.entityName, 'post'))
        .execute();

      return keys.map(
        (key) =>
          result.filter(
            (reaction) => reaction.entityId === key,
          ) as unknown as Array<Reaction>,
      );
    });

    return dataLoader.load(postId);
  }
}
