import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { JwksStrategy } from './strategies';

@Global()
@Module({
  imports: [HttpModule, JwtModule.register({})],
  providers: [JwksStrategy, AuthService],
})
export class AuthModule {}
