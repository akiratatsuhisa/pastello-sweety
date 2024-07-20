import { Field, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comments/types';
import { BaseNode } from 'src/graphql/models';
import { Post } from 'src/posts/types';
import { User } from 'src/users/types';

@ObjectType({
  implements: () => [BaseNode],
})
export class Tag implements BaseNode {
  id: bigint;

  @Field(() => String)
  name: string;

  createdBy: string;

  createdUser: User;

  createdAt: Date;

  updatedBy: string;

  updatedUser: User;

  updatedAt: Date;

  @Field(() => [Post])
  posts: Array<Post>;

  @Field(() => [Comment])
  comments: Array<Comment>;
}
