import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  username: string;

  @Field(() => String)
  picture: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  nickname: string;

  @Field(() => String, { nullable: true })
  givenName: string;

  @Field(() => String, { nullable: true })
  familyName: string;
}

export const Auth0User = User;
