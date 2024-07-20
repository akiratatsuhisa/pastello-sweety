import { ArgsType, Field } from '@nestjs/graphql';
import { EntityName } from 'src/graphql/models';
import { Entity } from 'src/graphql/models/entity.interface';
import { BigIntScalar } from 'src/graphql/scalars';

@ArgsType()
export class AddTag implements Entity {
  @Field(() => EntityName)
  entityName: EntityName;

  @Field(() => BigIntScalar)
  entityId: bigint;

  @Field(() => BigIntScalar)
  tagId: bigint;
}
