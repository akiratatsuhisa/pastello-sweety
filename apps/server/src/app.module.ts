import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { appProviders } from 'src/app.providers';
import { AuthModule } from 'src/auth/auth.module';

import { BooksModule } from './books/books.module';
import { ChaptersModule } from './chapters/chapters.module';
import { DataLoaderModule } from './data-loader/data-loader.module';
import { DrizzleModule } from './drizzle/drizzle.module';

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
    BooksModule,
    ChaptersModule,
  ],
  providers: [...appProviders],
})
export class AppModule {}
