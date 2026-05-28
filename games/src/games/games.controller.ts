import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, SetMetadata } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto, UpdateGameDto, CreateCategoryDto, UpdateCategoryDto } from '../dto/game.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all games' })
  @ApiResponse({ status: 200, description: 'List of all games' })
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get game details by ID' })
  @ApiResponse({ status: 200, description: 'Game details with run categories' })
  @ApiResponse({ status: 404, description: 'Game not found' })
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(id);
  }
}

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private gamesService: GamesService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get run category details by ID' })
  @ApiResponse({ status: 200, description: 'Run category details' })
  @ApiResponse({ status: 404, description: 'Run category not found' })
  findOne(@Param('id') id: string) {
    return this.gamesService.findCategoryById(id);
  }
}

@ApiTags('admin')
@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class AdminController {
  constructor(private gamesService: GamesService) {}

  @Post('games')
  @SetMetadata('roles', 'ADMIN')
  @ApiOperation({ summary: 'Create a new game (Admin only)' })
  @ApiResponse({ status: 201, description: 'Game created successfully' })
  @ApiResponse({ status: 403, description: 'Insufficient permissions' })
  createGame(@Body() dto: CreateGameDto) {
    return this.gamesService.createGame(dto);
  }

  @Patch('games/:id/update')
  @SetMetadata('roles', 'ADMIN')
  @ApiOperation({ summary: 'Update a game (Admin only)' })
  @ApiResponse({ status: 200, description: 'Game updated successfully' })
  @ApiResponse({ status: 403, description: 'Insufficient permissions' })
  @ApiResponse({ status: 404, description: 'Game not found' })
  updateGame(@Param('id') id: string, @Body() dto: UpdateGameDto) {
    return this.gamesService.updateGame(id, dto);
  }

  @Delete('games/:id/delete')
  @SetMetadata('roles', 'ADMIN')
  @ApiOperation({ summary: 'Delete a game (Admin only)' })
  @ApiResponse({ status: 200, description: 'Game deleted successfully' })
  @ApiResponse({ status: 403, description: 'Insufficient permissions' })
  @ApiResponse({ status: 404, description: 'Game not found' })
  deleteGame(@Param('id') id: string) {
    return this.gamesService.deleteGame(id);
  }

  @Post('categories')
  @SetMetadata('roles', 'ADMIN')
  @ApiOperation({ summary: 'Create a new run category (Admin only)' })
  @ApiResponse({ status: 201, description: 'Run category created successfully' })
  @ApiResponse({ status: 403, description: 'Insufficient permissions' })
  @ApiResponse({ status: 404, description: 'Game not found' })
  createCategory(@Body() dto: CreateCategoryDto) {
    return this.gamesService.createCategory(dto);
  }

  @Patch('categories/:id/update')
  @SetMetadata('roles', 'ADMIN')
  @ApiOperation({ summary: 'Update a run category (Admin only)' })
  @ApiResponse({ status: 200, description: 'Run category updated successfully' })
  @ApiResponse({ status: 403, description: 'Insufficient permissions' })
  @ApiResponse({ status: 404, description: 'Run category not found' })
  updateCategory(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
    return this.gamesService.updateCategory(id, dto);
  }

  @Delete('categories/:id/delete')
  @SetMetadata('roles', 'ADMIN')
  @ApiOperation({ summary: 'Delete a run category (Admin only)' })
  @ApiResponse({ status: 200, description: 'Run category deleted successfully' })
  @ApiResponse({ status: 403, description: 'Insufficient permissions' })
  @ApiResponse({ status: 404, description: 'Run category not found' })
  deleteCategory(@Param('id') id: string) {
    return this.gamesService.deleteCategory(id);
  }
}