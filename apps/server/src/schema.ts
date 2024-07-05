import {
  bigint,
  bigserial,
  pgTable,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

const commonFields = {
  createdBy: varchar('created_by', { length: 256 }).notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull(),
  updatedBy: varchar('updated_by', { length: 256 }).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).notNull(),
};

export const books = pgTable('books', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  ...commonFields,
});

export const chapters = pgTable('chapters', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  bookId: bigint('book_id', { mode: 'bigint' })
    .notNull()
    .references(() => books.id),
  ...commonFields,
});
