import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { appProviders } from 'src/app.providers';
import { AppResolver } from 'src/app.resolver';
import { AuthModule } from 'src/auth/auth.module';

import { CommentsModule } from './comments/comments.module';
import { DataLoaderModule } from './data-loader/data-loader.module';
import { DrizzleModule } from './drizzle/drizzle.module';
import { PostsModule } from './posts/posts.module';
import { ReactionsModule } from './reactions/reactions.module';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.register({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    DrizzleModule,
    AuthModule,
    DataLoaderModule,
    TagsModule,
    PostsModule,
    CommentsModule,
    ReactionsModule,
    UsersModule,
  ],
  providers: [...appProviders, AppResolver],
})
export class AppModule {}
