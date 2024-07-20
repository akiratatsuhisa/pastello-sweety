import { Field, InputType } from '@nestjs/graphql';

import { Type } from './type.enum';

@InputType()
export class CreatePost {
  @Field(() => Type, { defaultValue: Type.STANDARD })
  type: Type;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  content?: string;

  @Field(() => Boolean, { defaultValue: false })
  isPublish: boolean;
}
