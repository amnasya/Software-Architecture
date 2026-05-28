import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { RunStatus } from '../common/enums/run-status.enum';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async getRunsByStatus(status: string) {
    return this.prisma.runs.findMany({
      where: {
        status,
      },
    });
  }

  async accept(id: string) {
    const run = await this.prisma.runs.findFirst({
      where: {
        run_id: id,
      },
    });

    if (!run) {
      throw new NotFoundException('Run not found');
    }

    return this.prisma.runs.update({
      where: {
        run_id: id,
      },
      data: {
        status: RunStatus.ACCEPTED,
        verified_at: new Date(),
      },
    });
  }

  async reject(id: string) {
    const run = await this.prisma.runs.findFirst({
      where: {
        run_id: id,
      },
    });

    if (!run) {
      throw new NotFoundException('Run not found');
    }

    return this.prisma.runs.update({
      where: {
        run_id: id,
      },
      data: {
        status: RunStatus.REJECTED,
        verified_at: new Date(),
      },
    });
  }
}