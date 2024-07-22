import { ArgsType, Field, PartialType } from '@nestjs/graphql';
import { PaginationFilter } from 'src/graphql/models';

@ArgsType()
export class PostsFilter extends PartialType(PaginationFilter) {
  @Field(() => Boolean, { defaultValue: false })
  includeUnpublished: boolean;
}
