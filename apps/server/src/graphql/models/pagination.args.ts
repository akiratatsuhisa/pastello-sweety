import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';

export const paginationFilterDefault: PaginationFilter = {
  limit: 50,
  offset: 0,
};

@ArgsType()
export class PaginationFilter {
  @Transform(({ value }) => value ?? paginationFilterDefault.limit)
  @Max(100)
  @Min(10)
  @IsOptional()
  @Field(() => Int, { defaultValue: paginationFilterDefault.limit })
  limit: number;

  @Transform(({ value }) => value ?? paginationFilterDefault.offset)
  @Min(0)
  @IsOptional()
  @Field(() => Int, { defaultValue: paginationFilterDefault.offset })
  offset: number;
}
