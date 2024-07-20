import { registerEnumType } from '@nestjs/graphql';

export enum Type {
  ANGRY = 'angry',
  UNLIKE = 'unlike',
  NEUTRAL = 'neutral',
  LIKE = 'like',
  LOVE = 'love',
  UPSET = 'upset',
  WOW = 'wow',
}

registerEnumType(Type, {
  name: 'ReactionType',
});
