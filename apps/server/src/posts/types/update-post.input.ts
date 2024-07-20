import { InputType, PartialType } from '@nestjs/graphql';

import { CreatePost } from './create-post.input';

@InputType()
export class UpdatePost extends PartialType(CreatePost) {}
