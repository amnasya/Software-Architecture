import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { RunsService } from './runs.service';
import { CreateRunDto } from './dto/create-run.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Runs')
@Controller('runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @Get(':id/category')
  getRunsByCategory(@Param('id') id: string) {
    return this.runsService.getRunsByCategory(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id/user')
  getRunsByUser(@Param('id') id: string, @Req() req: any) {
    return this.runsService.getRunsByUser(id, req.user);
  }

  @Get(':id')
  getRunDetail(@Param('id') id: string) {
    return this.runsService.getRunDetail(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateRunDto, @Req() req: any) {
    return this.runsService.create(dto, req.user);
  }
}