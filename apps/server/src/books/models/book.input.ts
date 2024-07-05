import { Field, InputType, PartialType } from '@nestjs/graphql';
import { PaginationFilter, paginationFilterDefault } from 'src/graphql/models';

export const bookFilterDefault: BooksFilter = {
  ...paginationFilterDefault,
};

@InputType()
export class BooksFilter extends PartialType(PaginationFilter) {}

@InputType()
export class UpsertBookInput {
  @Field(() => String)
  title: string;
}

@InputType()
export class UpdateBookStatusInput {
  @Field(() => Boolean)
  status: boolean;
}
