import { forwardRef, Module } from '@nestjs/common';
import { CommentsModule } from 'src/comments/comments.module';
import { ReactionsModule } from 'src/reactions/reactions.module';
import { TagsModule } from 'src/tags/tags.module';

import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  imports: [
    forwardRef(() => CommentsModule),
    forwardRef(() => TagsModule),
    forwardRef(() => ReactionsModule),
  ],
  providers: [PostsResolver, PostsService],
  exports: [PostsService],
})
export class PostsModule {}
