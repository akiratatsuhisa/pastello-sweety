import { Injectable, NotFoundException } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { IdentityUser } from 'src/auth/identity.class';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { tags } from 'src/schema';

import { CreateTag, UpdateTag } from './types';

@Injectable()
export class TagsService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly dataLoaderService: DataLoaderService,
  ) {}

  async findAll() {
    const result = await this.drizzleService.db
      .select()
      .from(tags)
      .orderBy(tags.id)
      .execute();

    return result;
  }

  async findById(id: bigint) {
    const [result] = await this.drizzleService.db
      .select()
      .from(tags)
      .where(eq(tags.id, id))
      .execute();

    if (!result) {
      throw new NotFoundException();
    }

    return result;
  }

  async create(data: CreateTag, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .insert(tags)
      .values({
        ...data,
        ...this.drizzleService.createFields(user),
      })
      .returning()
      .execute();

    return result;
  }

  async update(id: bigint, data: UpdateTag, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .update(tags)
      .set({
        ...data,
        ...this.drizzleService.uppdateFields(user),
      })
      .where(eq(tags.id, id))
      .returning()
      .execute();

    return result;
  }

  async delete(id: bigint) {
    const [result] = await this.drizzleService.db
      .delete(tags)
      .where(eq(tags.id, id))
      .returning()
      .execute();

    return result;
  }
}
