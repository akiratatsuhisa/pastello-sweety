import { Global, Module } from '@nestjs/common';

import { DrizzleService } from './drizzle.service';

@Global()
@Module({
  providers: [DrizzleService],
  exports: [DrizzleService],
})
export class DrizzleModule {
  constructor() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    BigInt.prototype.toJSON = function (): string {
      return this.toString();
    };
  }
}
