import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { IdentityUser, User } from 'src/auth/decorators';
import { Chapter, ChaptersFilter } from 'src/chapters/models';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { BigIntScalar } from 'src/graphql/scalars';

import { BooksService } from './books.service';
import {
  Book,
  bookFilterDefault,
  BooksFilter,
  UpsertBookInput,
} from './models';

@Resolver(() => Book)
export class BooksResolver {
  constructor(
    private readonly dataLoaderService: DataLoaderService,
    private readonly booksService: BooksService,
  ) {}

  @Query(() => [Book])
  async books(
    @Args('filter', {
      type: () => BooksFilter,
      defaultValue: Object.assign(new BooksFilter(), bookFilterDefault),
    })
    filter: BooksFilter,
  ) {
    return this.booksService.findAll(filter);
  }

  @Query(() => Book)
  async book(@Args('id', { type: () => BigIntScalar }) id: bigint) {
    return this.booksService.findById(id);
  }

  @Mutation(() => Book)
  async createBook(
    @Args('input', { type: () => UpsertBookInput }) input: UpsertBookInput,
    @User() user: IdentityUser,
  ) {
    return this.booksService.create(input, user);
  }

  @Mutation(() => Book)
  async updateBook(
    @Args('id', { type: () => BigIntScalar }) id: bigint,
    @Args('input', { type: () => UpsertBookInput }) input: UpsertBookInput,
    @User() user: IdentityUser,
  ) {
    return this.booksService.update(id, input, user);
  }

  @Mutation(() => Book)
  async deleteBook(@Args('id', { type: () => BigIntScalar }) id: bigint) {
    return this.booksService.delete(id);
  }

  @ResolveField(() => [Chapter])
  async chapters(
    @Parent() parent: Book,
    @Args('filter', { type: () => ChaptersFilter, nullable: true })
    filter: ChaptersFilter,
  ) {
    if (!parent?.id) {
      return null;
    }

    return this.dataLoaderService.getChaptersByBookIds(parent.id, filter);
  }
}
