import { SetMetadata } from '@nestjs/common';
import { enums } from 'utils';

export const PERMISSIONS_KEY = 'roles';
export const Permissions = (...permissions: Array<enums.Auth0Permission>) =>
  SetMetadata(PERMISSIONS_KEY, permissions);
