import { Injectable } from '@nestjs/common';
import { DataLoaderService } from 'src/data-loader/data-loader.service';
import { DrizzleService } from 'src/drizzle/drizzle.service';

@Injectable()
export class ReactionsService {
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly dataLoaderService: DataLoaderService,
  ) {}
}
