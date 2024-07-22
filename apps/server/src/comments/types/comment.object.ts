import { Field, ObjectType } from '@nestjs/graphql';
import { BaseNode } from 'src/graphql/models';
import { BigIntScalar } from 'src/graphql/scalars';
import { Post } from 'src/posts/types';
import { Reaction } from 'src/reactions/types';
import { Tag } from 'src/tags/types';
import { User } from 'src/users/types';

@ObjectType({
  implements: () => [BaseNode],
})
export class Comment implements BaseNode {
  id: bigint;

  @Field(() => BigIntScalar)
  postId: bigint;

  @Field(() => Post, { nullable: true })
  post: Post;

  @Field(() => BigIntScalar, { nullable: true })
  parentId?: bigint;

  @Field(() => Comment, { nullable: true })
  parent?: Comment;

  @Field(() => [Comment])
  children: Array<Comment>;

  @Field(() => String)
  content: string;

  createdBy: string;

  createdUser: User;

  createdAt: Date;

  updatedBy: string;

  updatedUser: User;

  updatedAt: Date;

  @Field(() => [Tag])
  tags: Array<Tag>;

  @Field(() => [Reaction])
  reactions: Array<Reaction>;
}
