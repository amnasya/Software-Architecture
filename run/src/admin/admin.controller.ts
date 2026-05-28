import {
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@ApiTags('Admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('admin/runs')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get(':status')
  getRunsByStatus(@Param('status') status: string) {
    return this.adminService.getRunsByStatus(status);
  }

  @Post(':id/accept')
  accept(@Param('id') id: string) {
    return this.adminService.accept(id);
  }

  @Post(':id/reject')
  reject(@Param('id') id: string) {
    return this.adminService.reject(id);
  }
}