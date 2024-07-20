import { Field, InterfaceType } from '@nestjs/graphql';
import { User } from 'src/users/types';

import { BigIntScalar } from '../scalars';

@InterfaceType()
export abstract class BaseNode {
  @Field(() => BigIntScalar)
  id: bigint;

  @Field(() => String)
  createdBy: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => User)
  createdUser: User;

  @Field(() => String)
  updatedBy: string;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => User)
  updatedUser: User;
}
