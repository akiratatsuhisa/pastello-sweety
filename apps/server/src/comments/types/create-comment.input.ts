import { Field, InputType } from '@nestjs/graphql';
import { BigIntScalar } from 'src/graphql/scalars';

@InputType()
export class CreateComment {
  @Field(() => BigIntScalar)
  postId: bigint;

  @Field(() => BigIntScalar, { nullable: true })
  parentId?: bigint;

  @Field(() => String)
  content: string;
}
