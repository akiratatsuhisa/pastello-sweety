import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import { IdentityUser } from 'src/auth/identity.class';
import * as schema from 'src/schema';

@Injectable()
export class DrizzleService implements OnModuleInit, OnModuleDestroy {
  public db: ReturnType<typeof drizzle>;
  private readonly client: Client;

  constructor(configService: ConfigService) {
    this.client = new Client({
      connectionString: configService.get<string>('DB_URL'),
    });
  }

  async onModuleInit() {
    await this.client.connect();
    this.db = drizzle(this.client, { schema, logger: true });
  }

  async onModuleDestroy() {
    await this.client.end();
  }

  createFields(user: IdentityUser) {
    const date = new Date();

    return {
      createdBy: user.sub,
      createdAt: date,
      updatedBy: user.sub,
      updatedAt: date,
    };
  }

  updatedFields(user: IdentityUser) {
    const date = new Date();

    return {
      updatedBy: user.sub,
      updatedAt: date,
    };
  }
}
