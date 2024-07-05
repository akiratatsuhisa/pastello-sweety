import { Field, InputType, Int } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';

export const paginationFilterDefault: PaginationFilter = {
  limit: 50,
  skip: 0,
};

@InputType()
export class PaginationFilter {
  @Transform(({ value }) => value ?? paginationFilterDefault.limit)
  @Max(100)
  @Min(10)
  @IsOptional()
  @Field(() => Int, { defaultValue: paginationFilterDefault.limit })
  limit: number;

  @Transform(({ value }) => value ?? paginationFilterDefault.skip)
  @Min(0)
  @IsOptional()
  @Field(() => Int, { defaultValue: paginationFilterDefault.skip })
  skip: number;
}
