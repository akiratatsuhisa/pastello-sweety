import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, Min } from 'class-validator';
import { BigIntScalar } from 'src/graphql/scalars';

@InputType()
export class ChaptersFilter {
  @Min(1)
  @IsOptional()
  @Field(() => Int, { nullable: true })
  limit?: number;

  @Min(0)
  @IsOptional()
  @Field(() => Int, { nullable: true })
  skip?: number;
}

@InputType()
export class UpsertChapterInput {
  @Field(() => String)
  title: string;

  @Field(() => BigIntScalar)
  bookId: bigint;
}
