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

  name: varchar('name', { length: 256 }).notNull().unique(),

  ...commonFields,
});

export const posts = pgTable('posts', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),

  type: varchar('type', { enum: ['compact', 'standard', 'photos'] })
    .notNull()
    .default('standard'),
  title: varchar('title', { length: 256 }).notNull(),
  description: varchar('description', { length: 1024 }),
  content: text('content'),
  isPublish: boolean('is_publish').notNull().default(false),

  ...commonFields,
});

export const comments = pgTable('comments', {
  id: bigserial('id', { mode: 'bigint' }).primaryKey(),

  postId: bigint('book_id', { mode: 'bigint' })
    .notNull()
    .references(() => posts.id, { onUpdate: 'cascade', onDelete: 'cascade' }),

  parentId: bigint('book_id', { mode: 'bigint' }).references(
    (): AnyPgColumn => comments.id,
    { onUpdate: 'cascade', onDelete: 'cascade' },
  ),

  content: text('content').notNull(),

  ...commonFields,
});

export const reactions = pgTable(
  'reactions',
  {
    id: bigserial('id', { mode: 'bigint' }).primaryKey(),

    entityName: varchar('entity_name', {
      enum: ['post', 'comment'],
    }).notNull(),
    entityId: bigint('entity_id', { mode: 'bigint' }).notNull(),

    rating: smallint('rating'),
    type: varchar('type', {
      enum: ['angry', 'unlike', 'neutral', 'like', 'love', 'upset', 'wow'],
    }),

    ...commonFields,
  },
  (table) => {
    return {
      uniqueEntity: unique().on(
        table.entityName,
        table.entityId,
        table.createdBy,
      ),
    };
  },
);

export const tagRelationships = pgTable(
  'tag_relationships',
  {
    id: bigserial('id', { mode: 'bigint' }).primaryKey(),

    entityName: varchar('entity_name', {
      enum: ['post', 'comment'],
    }).notNull(),
    entityId: bigint('entity_id', { mode: 'bigint' }).notNull(),

    tagId: bigint('tag_id', { mode: 'bigint' }).notNull(),
    ...commonFields,
  },
  (table) => {
    return {
      uniqueEntity: unique().on(table.entityName, table.entityId, table.tagId),
    };
  },
);
