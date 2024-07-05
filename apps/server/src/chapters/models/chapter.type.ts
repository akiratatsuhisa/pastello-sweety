import { Field, ObjectType } from '@nestjs/graphql';
import { Book } from 'src/books/models';
import { BaseNode } from 'src/graphql/models';
import { BigIntScalar } from 'src/graphql/scalars';

@ObjectType({
  implements: () => [BaseNode],
})
export class Chapter implements BaseNode {
  id: bigint;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;

  @Field(() => String)
  title: string;

  @Field(() => BigIntScalar)
  bookId: bigint;

  @Field(() => Book)
  book: Book;
}
