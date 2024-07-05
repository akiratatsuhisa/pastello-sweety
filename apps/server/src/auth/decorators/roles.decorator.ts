import { SetMetadata } from '@nestjs/common';
import { enums } from 'utils';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Array<enums.Auth0Role>) =>
  SetMetadata(ROLES_KEY, roles);
