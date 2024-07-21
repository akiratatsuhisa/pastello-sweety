import { BadRequestException, Injectable } from '@nestjs/common';
import { and, eq, gt, inArray, lte, sql } from 'drizzle-orm';
import { IdentityUser } from 'src/auth/identity.class';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { FilterKey, rowNumerAlias } from 'src/data-loader/data-loader.types';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { EntityName, PaginationFilter } from 'src/graphql/models';
import { reactions } from 'src/schema';

import { DeleteReaction, Reaction, UpsertReaction } from './types';

@Injectable()
export class ReactionsService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly dataLoaderService: DataLoaderService,
  ) {}

  async loadRectionsByEntityId(
    enityName: EntityName,
    entityId: bigint,
    filter: PaginationFilter,
  ) {
    const dataLoader = this.dataLoaderService.getDataLoader<
      FilterKey<PaginationFilter>,
      bigint,
      Array<Reaction>
    >(
      { __key: `loadRectionsByEntityId:${enityName}`, ...filter },
      async (keys) => {
        const rankedReactions = this.drizzleService.db
          .$with('ranked_reactions')
          .as(
            this.drizzleService.db
              .select({
                id: reactions.id,
                entityName: reactions.entityName,
                entityId: reactions.entityId,
                rating: reactions.rating,
                type: reactions.type,
                createdBy: reactions.createdBy,
                createdAt: reactions.createdAt,
                updatedBy: reactions.updatedBy,
                updatedAt: reactions.updatedAt,
                rowNumber:
                  sql`ROW_NUMBER() OVER (PARTITION BY ${reactions.entityId} ORDER BY ${reactions.id})`.as(
                    rowNumerAlias,
                  ),
              })
              .from(reactions)
              .where(
                and(
                  eq(reactions.entityName, enityName),
                  inArray(reactions.entityId, [...keys]),
                ),
              ),
          );

        const result = await this.drizzleService.db
          .with(rankedReactions)
          .select()
          .from(rankedReactions)
          .where(
            and(
              gt(rankedReactions.rowNumber, filter.offset),
              lte(rankedReactions.rowNumber, filter.limit),
            ),
          )
          .execute();

        const mapResult = result.reduce((map, result) => {
          if (map.has(result.entityId)) {
            map.get(result.entityId).push(result as unknown as Reaction);
          } else {
            map.set(result.entityId, [result as unknown as Reaction]);
          }
          return map;
        }, new Map<bigint, Array<Reaction>>());

        return keys.map((key) => mapResult.get(key) ?? []);
      },
    );

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
