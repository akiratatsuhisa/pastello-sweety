import { ArgsType, Field, PartialType } from '@nestjs/graphql';
import { PaginationFilter } from 'src/graphql/models';
import { BigIntScalar } from 'src/graphql/scalars';

@ArgsType()
export class CommentsFilter extends PartialType(PaginationFilter) {
  @Field(() => BigIntScalar)
  postId: bigint;

  @Field(() => Boolean, { defaultValue: false })
  includeUnpublished: boolean;
}
