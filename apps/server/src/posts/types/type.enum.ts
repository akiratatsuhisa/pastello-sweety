import { registerEnumType } from '@nestjs/graphql';

export enum Type {
  COMPACT = 'compact',
  STANDARD = 'standard',
  PHOTOS = 'photos',
}

registerEnumType(Type, {
  name: 'PostType',
});
