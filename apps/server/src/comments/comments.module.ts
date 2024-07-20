import { forwardRef, Module } from '@nestjs/common';
import { PostsModule } from 'src/posts/posts.module';
import { ReactionsModule } from 'src/reactions/reactions.module';
import { TagsModule } from 'src/tags/tags.module';
import { UsersModule } from 'src/users/users.module';

import { CommentsResolver } from './comments.resolver';
import { CommentsService } from './comments.service';

@Module({
  imports: [
    forwardRef(() => PostsModule),
    forwardRef(() => TagsModule),
    forwardRef(() => ReactionsModule),
    forwardRef(() => UsersModule),
  ],
  providers: [CommentsResolver, CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
