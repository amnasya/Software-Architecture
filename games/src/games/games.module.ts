import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { GamesController, CategoriesController, AdminController } from './games.controller';
import { SyncController } from '../sync/sync.controller';
import { GamesService } from './games.service';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { RolesGuard } from '../guards/roles.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [GamesController, CategoriesController, AdminController, SyncController],
  providers: [GamesService, JwtStrategy, PrismaService, RolesGuard],
  exports: [GamesService],
})
export class GamesModule {}