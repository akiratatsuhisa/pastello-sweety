import { Field, ObjectType } from '@nestjs/graphql';
import { BaseNode } from 'src/graphql/models';

@ObjectType({
  implements: () => [BaseNode],
})
export class Book implements BaseNode {
  id: bigint;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;

  @Field(() => String)
  title: string;
}
