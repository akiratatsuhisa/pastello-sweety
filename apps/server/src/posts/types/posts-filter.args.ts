import { ArgsType, Field, PartialType } from '@nestjs/graphql';
import { PaginationFilter } from 'src/graphql/models';

import { Type } from './type.enum';

@ArgsType()
export class PostsFilter extends PartialType(PaginationFilter) {
  @Field(() => Boolean, { defaultValue: false })
  includeUnpublished: boolean;

  @Field(() => [Type])
  type: Array<Type>;
}
