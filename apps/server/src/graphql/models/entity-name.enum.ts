import { registerEnumType } from '@nestjs/graphql';

export enum EntityName {
  POST = 'post',
  COMMENT = 'comment',
}

registerEnumType(EntityName, { name: 'EntityName' });
