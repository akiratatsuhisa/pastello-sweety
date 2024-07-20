import { InputType, PartialType } from '@nestjs/graphql';

import { CreateTag } from './create-tag.input';

@InputType()
export class UpdateTag extends PartialType(CreateTag) {}
