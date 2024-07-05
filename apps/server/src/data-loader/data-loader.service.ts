import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { and, gt, inArray, lte, sql, SQLWrapper } from 'drizzle-orm';
import { Book } from 'src/books/models';
import { Chapter } from 'src/chapters/models';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import { books, chapters } from 'src/schema';

import {
  FilterGetChaptersByBookIds,
  FilterKey,
  FilterProps,
  rowNumerAlias,
} from './data-loader.types';

@Injectable({ scope: Scope.REQUEST })
export class DataLoaderService {
  private readonly loaders: Map<string, DataLoader<any, any>>;

  constructor(private readonly drizzleService: DrizzleService) {
    this.loaders = new Map();
  }

  private getDataLoader<F extends FilterProps, K, V, C = K>(
    filterKey: FilterKey<F>,
    batchLoadFn: DataLoader.BatchLoadFn<K, V>,
    options?: DataLoader.Options<K, V, C>,
  ) {
    const key = JSON.stringify(filterKey);

    if (this.loaders.has(key)) {
      return this.loaders.get(key) as DataLoader<K, V, C>;
    }

    const loader = new DataLoader<K, V, C>(batchLoadFn, options);

    this.loaders.set(key, loader);

    return loader;
  }

  async getChaptersByBookIds(id: bigint, filter: FilterGetChaptersByBookIds) {
    const db = this.drizzleService.db;

    const loader = this.getDataLoader<
      FilterGetChaptersByBookIds,
      bigint,
      Array<Chapter>
    >({ __key: 'getChaptersByBookIds', ...filter }, async (keys) => {
      const rankedChapters = db.$with('ranked_chapters').as(
        db
          .select({
            id: chapters.id,
            title: chapters.title,
            bookId: chapters.bookId,
            createdBy: chapters.createdBy,
            createdAt: chapters.createdAt,
            updatedBy: chapters.updatedBy,
            updatedAt: chapters.updatedAt,
            rowNumber:
              sql`ROW_NUMBER() OVER (PARTITION BY ${chapters.bookId} ORDER BY ${chapters.id})`.as(
                rowNumerAlias,
              ),
          })
          .from(chapters)
          .where(inArray(chapters.bookId, [...keys])),
      );

      const andWhere: Array<SQLWrapper | undefined> = [];

      const { limit, skip } = filter;
      if (typeof skip === 'number') {
        andWhere.push(gt(rankedChapters.rowNumber, skip));
      }
      if (typeof limit === 'number') {
        andWhere.push(lte(rankedChapters.rowNumber, (skip ?? 0) + limit));
      }

      const result = await db
        .with(rankedChapters)
        .select()
        .from(rankedChapters)
        .where(and(...andWhere))
        .execute();

      return keys.map((key) =>
        result
          .filter((chapter) => chapter.bookId === key)
          .map((chapter: unknown) => chapter as Chapter),
      );
    });

    return loader.load(id);
  }

  async getBookByBookIds<F extends Record<string, never>>(
    id: bigint,
    filter?: F,
  ) {
    const db = this.drizzleService.db;

    const loader = this.getDataLoader<F, bigint, Book>(
      { __key: 'getBookByBookIds', ...filter },
      async (keys) => {
        const result = await db
          .select({
            id: books.id,
            title: books.title,
            createdBy: books.createdBy,
            createdAt: books.createdAt,
            updatedBy: books.updatedBy,
            updatedAt: books.updatedAt,
          })
          .from(books)
          .where(inArray(books.id, [...keys]))
          .execute();

        const mapBooks = result.reduce((map, book) => {
          map.set(book.id, book as unknown as Book);
          return map;
        }, new Map<bigint, Book>());

        return keys.map((key) => mapBooks.get(key));
      },
    );

    return loader.load(id);
  }
}
