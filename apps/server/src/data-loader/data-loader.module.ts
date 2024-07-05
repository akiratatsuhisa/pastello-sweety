import { Global, Module } from '@nestjs/common';

import { DataLoaderService } from './data-loader.service';

@Global()
@Module({
  providers: [DataLoaderService],
  exports: [DataLoaderService],
})
export class DataLoaderModule {}
