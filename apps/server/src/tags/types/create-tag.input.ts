import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTag {
  @Field(() => String)
  name: string;
}
