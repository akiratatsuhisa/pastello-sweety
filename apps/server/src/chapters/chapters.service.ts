import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { IdentityUser } from 'src/auth/identity.class';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { chapters } from 'src/schema';

import { UpsertChapterInput } from './models';

@Injectable()
export class ChaptersService {
  constructor(private readonly drizzleService: DrizzleService) {}

  async create(input: UpsertChapterInput, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .insert(chapters)
      .values({ ...input, ...this.drizzleService.createFields(user) })
      .returning()
      .execute();

    return result;
  }

  async update(id: bigint, input: UpsertChapterInput, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .update(chapters)
      .set({ ...input, ...this.drizzleService.uppdateFields(user) })
      .where(eq(chapters.id, id))
      .returning()
      .execute();

    return result;
  }

  async delete(id: bigint) {
    const [result] = await this.drizzleService.db
      .delete(chapters)
      .where(eq(chapters.id, id))
      .returning()
      .execute();

    return result;
  }
}
