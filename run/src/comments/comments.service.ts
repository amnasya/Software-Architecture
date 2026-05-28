import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCommentDto, user: any) {
    if (dto.user_id !== user.userId) {
      throw new ForbiddenException('Invalid user');
    }

    const run = await this.prisma.runs.findFirst({
      where: {
        run_id: dto.run_id,
      },
    });

    if (!run) {
      throw new BadRequestException('Run not found');
    }

    try {
      await axios.get(
        `${process.env.AUTH_SERVICE_URL}/api/users/${dto.user_id}/profile`,
      );
    } catch {
      throw new BadRequestException('User not found');
    }

    return this.prisma.comments.create({
      data: {
        comment_id: uuid(),
        run_id: dto.run_id,
        user_id: dto.user_id,
        comment: dto.comment,
        created_at: new Date(),
      },
    });
  }

  async delete(id: string, user: any) {
    const comment = await this.prisma.comments.findFirst({
      where: {
        comment_id: id,
      },
    });

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    if (comment.user_id !== user.userId) {
      throw new ForbiddenException('Forbidden');
    }

    return this.prisma.comments.delete({
      where: {
        comment_id: id,
      },
    });
  }
}