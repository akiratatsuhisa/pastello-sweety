import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';

import { CreatePost } from './create-post.input';

@InputType()
export class UpdatePost extends PartialType(
  OmitType(CreatePost, ['type', 'isPublish']),
) {
  @Field(() => Boolean, { nullable: true })
  isPublish: boolean;
}
