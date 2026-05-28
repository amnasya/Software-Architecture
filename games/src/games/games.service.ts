import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGameDto, UpdateGameDto, CreateCategoryDto, UpdateCategoryDto } from '../dto/game.dto';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.games.findMany();
  }

  async findOne(id: string) {
    const game = await this.prisma.games.findUnique({
      where: { game_id: id },
      include: { run_categories: true },
    });
    if (!game) throw new NotFoundException('Game not found');
    return game;
  }

  async createGame(dto: CreateGameDto) {
    return this.prisma.games.create({
      data: { game_name: dto.game_name, description: dto.description },
    });
  }

  async updateGame(id: string, dto: UpdateGameDto) {
    const game = await this.prisma.games.findUnique({ where: { game_id: id } });
    if (!game) throw new NotFoundException('Game not found');

    return this.prisma.games.update({
      where: { game_id: id },
      data: { game_name: dto.game_name, description: dto.description },
    });
  }

  async deleteGame(id: string) {
    const game = await this.prisma.games.findUnique({ where: { game_id: id } });
    if (!game) throw new NotFoundException('Game not found');

    await this.prisma.games.delete({ where: { game_id: id } });
    return { message: 'Game deleted successfully' };
  }

  async findCategoryById(id: string) {
    const category = await this.prisma.run_categories.findUnique({
      where: { run_category_id: id },
      include: { game: true },
    });
    if (!category) throw new NotFoundException('Run category not found');
    return category;
  }

  async createCategory(dto: CreateCategoryDto) {
    const game = await this.prisma.games.findUnique({ where: { game_id: dto.game_id } });
    if (!game) throw new NotFoundException('Game not found');

    return this.prisma.run_categories.create({
      data: { game_id: dto.game_id, run_category_name: dto.run_category_name },
    });
  }

  async updateCategory(id: string, dto: UpdateCategoryDto) {
    const category = await this.prisma.run_categories.findUnique({
      where: { run_category_id: id },
    });
    if (!category) throw new NotFoundException('Run category not found');

    return this.prisma.run_categories.update({
      where: { run_category_id: id },
      data: { run_category_name: dto.run_category_name },
    });
  }

  async deleteCategory(id: string) {
    const category = await this.prisma.run_categories.findUnique({
      where: { run_category_id: id },
    });
    if (!category) throw new NotFoundException('Run category not found');

    await this.prisma.run_categories.delete({ where: { run_category_id: id } });
    return { message: 'Run category deleted successfully' };
  }
}