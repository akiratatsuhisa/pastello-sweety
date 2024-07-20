import { BadRequestException, Injectable } from '@nestjs/common';
import { and, eq, inArray } from 'drizzle-orm';
import { IdentityUser } from 'src/auth/identity.class';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { FilterProps } from 'src/data-loader/data-loader.types';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { EntityName } from 'src/graphql/models';
import { reactions } from 'src/schema';

import { DeleteReaction, Reaction, UpsertReaction } from './types';

@Injectable()
export class ReactionsService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly dataLoaderService: DataLoaderService,
  ) {}

  async loadRectionsByEntityId(enityName: EntityName, entityId: bigint) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterProps,
      bigint,
      Array<Reaction>
    >({ __key: `loadRectionsByEntityId:${enityName}` }, async (keys) => {
      const result = await this.drizzleService.db
        .select()
        .from(reactions)
        .where(
          and(
            eq(reactions.entityName, enityName),
            inArray(reactions.entityId, [...keys]),
          ),
        )
        .execute();

      const mapResult = result.reduce((map, result) => {
        if (map.has(result.entityId)) {
          map.get(result.entityId).push(result as Reaction);
        } else {
          map.set(result.entityId, [result as Reaction]);
        }
        return map;
      }, new Map<bigint, Array<Reaction>>());

      return keys.map((key) => mapResult.get(key) ?? []);
    });

    return dataLoader.load(entityId);
  }

  async upsert(data: UpsertReaction, user: IdentityUser) {
    if (
      (data.entityName === EntityName.POST &&
        (data.rating == null || data.type != null)) ||
      (data.entityName === EntityName.COMMENT &&
        (data.rating != null || data.type == null))
    ) {
      throw new BadRequestException();
    }

    const [result] = await this.drizzleService.db
      .insert(reactions)
      .values({
        ...data,
        ...this.drizzleService.createFields(user),
      })
      .onConflictDoUpdate({
        target: [reactions.entityId, reactions.entityName, reactions.createdBy],
        set: { ...data, ...this.drizzleService.updatedFields(user) },
      })
      .returning()
      .execute();

    return result;
  }

  async delete(data: DeleteReaction, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .delete(reactions)
      .where(
        and(
          eq(reactions.entityName, data.entityName),
          eq(reactions.entityId, data.entityId),
          eq(reactions.createdBy, user.sub),
        ),
      )
      .returning()
      .execute();

    return result;
  }
}
