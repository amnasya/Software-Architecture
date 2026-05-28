import { Controller, Post, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('sync')
@Controller('sync')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class SyncController {
  constructor() {}

  @Post('categories')
  @ApiOperation({ summary: 'Sync a category to run-service (internal use)' })
  @ApiResponse({ status: 200, description: 'Category synced' })
  syncCategory(@Body() body: { run_category_id: string; game_id: string; run_category_name: string; game_name: string }) {
    return { status: 'ok', data: body };
  }

  @Delete('categories/:id')
  @ApiOperation({ summary: 'Remove category from run-service cache (internal use)' })
  @ApiResponse({ status: 200, description: 'Category removed from cache' })
  removeCategory(@Param('id') id: string) {
    return { status: 'ok', run_category_id: id };
  }
}