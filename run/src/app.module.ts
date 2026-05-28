import { Module } from '@nestjs/common';

import { RunsModule } from './runs/runs.module';
import { CommentsModule } from './comments/comments.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [RunsModule, CommentsModule, AdminModule],
})
export class AppModule {}