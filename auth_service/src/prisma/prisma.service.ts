import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleDestroy
{
  constructor() {
    const databaseUrl =
      process.env.DATABASE_URL ??
      'mysql://root:password@localhost:3307/wspeedrun_auth';
    const url = new URL(databaseUrl);

    super({
      adapter: new PrismaMariaDb({
        host: url.hostname,
        port: Number(url.port || 3306),
        user: decodeURIComponent(url.username),
        password: decodeURIComponent(url.password),
        database: url.pathname.replace(/^\//, ''),
        connectionLimit: 5,
      }),
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
