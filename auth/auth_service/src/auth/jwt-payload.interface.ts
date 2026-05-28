import { Role } from '../common/enums/role.enum';

export interface JwtPayload {
  userId: number;
  role: Role;
}
