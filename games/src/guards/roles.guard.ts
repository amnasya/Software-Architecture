import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user as { userId: string; role: string };

    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }

    const requiredRole = this.reflector.get<string>('roles', context.getHandler());
    if (!requiredRole) return true;

    if (user.role !== requiredRole) {
      throw new ForbiddenException('Insufficient permissions');
    }
    return true;
  }
}