import { InputType, PartialType } from '@nestjs/graphql';

import { CreateComment } from './create-comment.input';

@InputType()
export class UpdateComment extends PartialType(CreateComment) {}
