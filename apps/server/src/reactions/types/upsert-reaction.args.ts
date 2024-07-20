import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsPositive, Max, Min } from 'class-validator';
import { EntityName } from 'src/graphql/models';
import { Entity } from 'src/graphql/models/entity.interface';
import { BigIntScalar } from 'src/graphql/scalars';

import { Type } from './type.enum';

@ArgsType()
export class UpsertReaction implements Entity {
  @Field(() => EntityName)
  entityName: EntityName;

  @Field(() => BigIntScalar)
  entityId: bigint;

  @Max(10)
  @Min(1)
  @IsPositive()
  @IsOptional()
  @Field(() => Int, { nullable: true })
  rating?: number;

  @Field(() => Type, { nullable: true })
  type?: Type;
}
