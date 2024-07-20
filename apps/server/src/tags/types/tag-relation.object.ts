import { Field, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comments/types';
import { BaseNode, EntityName } from 'src/graphql/models';
import { Entity, EntityUnion } from 'src/graphql/models/entity.interface';
import { Post } from 'src/posts/types';
import { User } from 'src/users/types';

@ObjectType({
  implements: () => [BaseNode, Entity],
})
export class TagRelation implements BaseNode, Entity {
  id: bigint;

  entityId: bigint;

  entityName: EntityName;

  @Field(() => EntityUnion)
  entity: Post | Comment;

  createdBy: string;

  createdUser: User;

  createdAt: Date;

  updatedBy: string;

  updatedUser: User;

  updatedAt: Date;
}
