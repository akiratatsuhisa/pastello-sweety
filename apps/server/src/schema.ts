import {
  AnyPgColumn,
  bigint,
  bigserial,
  boolean,
  pgTable,
  smallint,
  text,
  timestamp,
  unique,
  varchar,
} from 'drizzle-orm/pg-core';

const commonFields = {
  createdBy: varchar('created_by', { length: 256 }).notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull(),
  updatedBy: varchar('updated_by', { length: 256 }).notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).notNull(),
};

export const tags = pgTable('tags', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  ...commonFields,
});

export const posts = pgTable('posts', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),
  type: varchar('type', { enum: ['compact', 'standard', 'photos'] })
    .notNull()
    .default('standard'),
  title: varchar('title', { length: 256 }),
  description: varchar('description', { length: 1024 }),
  content: text('content'),
  isPublish: boolean('is_publish').notNull(),

  ...commonFields,
});

export const comments = pgTable('comments', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),
  postId: bigint('book_id', { mode: 'bigint' })
    .notNull()
    .references(() => posts.id),
  parentId: bigint('book_id', { mode: 'bigint' }).references(
    (): AnyPgColumn => comments.id,
  ),

  content: text('content').notNull(),

  ...commonFields,
});

export const reactions = pgTable(
  'reactions',
  {
    id: bigserial('id', { mode: 'bigint' }).primaryKey(),
    entityId: bigint('entity_id', { mode: 'bigint' }).notNull(),
    entityName: varchar('entity_name', {
      enum: ['post', 'comment'],
    }).notNull(),

    rating: smallint('rating'),
    type: varchar('type', {
      enum: ['angry', 'unlike', 'neutral', 'like', 'love', 'upset', 'wow'],
    }),

    ...commonFields,
  },
  (table) => {
    return {
      uniqueEntity: unique().on(table.entityName, table.entityId),
    };
  },
);

export const tagRelationships = pgTable(
  'tag_relationships',
  {
    id: bigserial('id', { mode: 'bigint' }).primaryKey(),
    entityId: bigint('entity_id', { mode: 'bigint' }).notNull(),
    entityName: varchar('entity_name', {
      enum: ['post', 'comment'],
    }).notNull(),
    ...commonFields,
  },
  (table) => {
    return {
      uniqueEntity: unique().on(table.entityName, table.entityId),
    };
  },
);
