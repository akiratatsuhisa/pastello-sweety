import { createUnionType, Field, InterfaceType } from '@nestjs/graphql';
import { Comment } from 'src/comments/types';
import { Post } from 'src/posts/types';

import { BigIntScalar } from '../scalars';
import { EntityName } from './entity-name.enum';

@InterfaceType()
export abstract class Entity {
  @Field(() => BigIntScalar)
  entityId: bigint;

  @Field(() => EntityName)
  entityName: EntityName;
}

export const EntityUnion = createUnionType({
  name: 'EntityUnion',
  types: () => [Post, Comment] as const,
  resolveType(value) {
    if (value.title) {
      return Post;
    }

    if (value.content) {
      return Comment;
    }

    return null;
  },
});
