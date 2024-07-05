import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { IdentityUser, User } from 'src/auth/decorators';
import { Book } from 'src/books/models';
import { ChaptersService } from 'src/chapters/chapters.service';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { BigIntScalar } from 'src/graphql/scalars';

import { Chapter, UpsertChapterInput } from './models';

@Resolver(() => Chapter)
export class ChaptersResolver {
  constructor(
    private readonly dataLoaderService: DataLoaderService,
    private readonly chaptersService: ChaptersService,
  ) {}

  @Mutation(() => Chapter)
  async createChapter(
    @Args('input', { type: () => UpsertChapterInput })
    input: UpsertChapterInput,
    @User() user: IdentityUser,
  ) {
    return this.chaptersService.create(input, user);
  }

  @Mutation(() => Chapter)
  async updateChapter(
    @Args('id', { type: () => BigIntScalar }) id: bigint,
    @Args('input', { type: () => UpsertChapterInput })
    input: UpsertChapterInput,
    @User() user: IdentityUser,
  ) {
    return this.chaptersService.update(id, input, user);
  }

  @Mutation(() => Chapter)
  async deleteChapter(@Args('id', { type: () => BigIntScalar }) id: bigint) {
    return this.chaptersService.delete(id);
  }

  @ResolveField(() => Book)
  async book(@Parent() parent: Chapter) {
    if (!parent?.bookId) {
      return null;
    }

    return this.dataLoaderService.getBookByBookIds(parent.bookId);
  }
}
