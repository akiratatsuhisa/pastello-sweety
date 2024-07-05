import { Field, InterfaceType } from '@nestjs/graphql';

import { BigIntScalar } from '../scalars';

@InterfaceType()
export abstract class BaseNode {
  @Field(() => BigIntScalar)
  id: bigint;

  @Field(() => String)
  createdBy: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => String)
  updatedBy: string;

  @Field(() => Date)
  updatedAt: Date;
}
