import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

import { PrismaService } from '../prisma/prisma.service';
import { CreateRunDto } from './dto/create-run.dto';
import { RunStatus } from '../common/enums/run-status.enum';
import { formatDuration } from '../common/utils/format-duration';

@Injectable()
export class RunsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRunDto, user: any) {
    try {
      await axios.get(
        `${process.env.GAME_SERVICE_URL}/api/categories/${dto.run_category_id}`,
      );
    } catch {
      throw new BadRequestException('Run category not found');
    }

    return this.prisma.runs.create({
      data: {
        run_id: uuid(),
        run_category_id: dto.run_category_id,
        user_id: user.userId,
        vod_url: dto.vod_url,
        run_duration: BigInt(dto.run_duration),
        submitted_at: new Date(),
        status: RunStatus.PENDING,
      },
    });
  }

  async getRunsByCategory(categoryId: string) {
    const runs = await this.prisma.runs.findMany({
      where: {
        run_category_id: categoryId,
        status: RunStatus.ACCEPTED,
      },
      orderBy: {
        run_duration: 'asc',
      },
    });

    return Promise.all(
      runs.map(async (run) => {
        const user = await axios.get(
          `${process.env.AUTH_SERVICE_URL}/api/users/${run.user_id}/profile`,
        );

        const category = await axios.get(
          `${process.env.GAME_SERVICE_URL}/api/categories/${categoryId}`,
        );

        return {
          ...run,
          run_duration: formatDuration(Number(run.run_duration)),
          runner: user.data,
          category: category.data,
        };
      }),
    );
  }

  async getRunDetail(id: string) {
    const run = await this.prisma.runs.findFirst({
      where: {
        run_id: id,
      },
    });

    if (!run) {
      throw new NotFoundException('Run not found');
    }

    const comments = await this.prisma.comments.findMany({
      where: {
        run_id: id,
      },
}