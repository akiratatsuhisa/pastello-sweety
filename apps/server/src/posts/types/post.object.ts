import { Field, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comments/types';
import { BaseNode } from 'src/graphql/models';
import { Reaction } from 'src/reactions/types';
import { Tag } from 'src/tags/types';
import { User } from 'src/users/types';

import { Type } from './type.enum';

@ObjectType({ implements: () => [BaseNode] })
export class Post implements BaseNode {
  id: bigint;

  @Field(() => Type)
  type: Type;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  content?: string;

  @Field(() => Boolean)
  isPublish: boolean;

  createdBy: string;

  createdUser: User;

  createdAt: Date;

  updatedBy: string;

  updatedUser: User;

  updatedAt: Date;

  @Field(() => [Comment])
  comments: Array<Comment>;

  @Field(() => [Tag])
  tags: Array<Tag>;

  @Field(() => [Reaction])
  reactions: Array<Reaction>;
}
