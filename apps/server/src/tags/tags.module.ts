import { forwardRef, Module } from '@nestjs/common';
import { CommentsModule } from 'src/comments/comments.module';
import { PostsModule } from 'src/posts/posts.module';
import { UsersModule } from 'src/users/users.module';

import { TagRelationsResolver } from './tag-relations.resolver';
import { TagsResolver } from './tags.resolver';
import { TagsService } from './tags.service';

@Module({
  imports: [
    forwardRef(() => PostsModule),
    forwardRef(() => CommentsModule),
    forwardRef(() => UsersModule),
  ],
  providers: [TagsResolver, TagsService, TagRelationsResolver],
  exports: [TagsService],
})
export class TagsModule {}
