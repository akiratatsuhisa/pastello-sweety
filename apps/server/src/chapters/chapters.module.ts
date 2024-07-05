import { Module } from '@nestjs/common';

import { ChaptersResolver } from './chapters.resolver';
import { ChaptersService } from './chapters.service';

@Module({
  providers: [ChaptersService, ChaptersResolver],
})
export class ChaptersModule {}
