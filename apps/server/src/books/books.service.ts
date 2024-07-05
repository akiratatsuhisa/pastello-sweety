import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { IdentityUser } from 'src/auth/identity.class';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { books } from 'src/schema';

import { BooksFilter, UpsertBookInput } from './models';

@Injectable()
export class BooksService {
  constructor(private readonly drizzleService: DrizzleService) {}

  async findAll(filter: BooksFilter) {
    const { limit, skip } = filter;

    const result = await this.drizzleService.db
      .select()
      .from(books)
      .orderBy(books.id)
      .offset(skip)
      .limit(limit)
      .execute();

    return result;
  }

  async findById(id: bigint) {
    const [result] = await this.drizzleService.db
      .select()
      .from(books)
      .where(eq(books.id, id))
      .execute();

    return result;
  }

  async create(input: UpsertBookInput, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .insert(books)
      .values({ ...input, ...this.drizzleService.createFields(user) })
      .returning()
      .execute();

    return result;
  }

  async update(id: bigint, input: UpsertBookInput, user: IdentityUser) {
    const [result] = await this.drizzleService.db
      .update(books)
      .set({ ...input, ...this.drizzleService.uppdateFields(user) })
      .where(eq(books.id, id))
      .returning()
      .execute();

    return result;
  }

  async delete(id: bigint) {
    const [result] = await this.drizzleService.db
      .delete(books)
      .where(eq(books.id, id))
      .returning()
      .execute();

    return result;
  }
}
