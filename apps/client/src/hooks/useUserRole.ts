import { useAuth0 } from '@auth0/auth0-react';
import { useMemo } from 'react';

export enum Auth0Role {
  Administrator = 'Administrator',
  User = 'User',
  Test = 'Test',
}

export type Auth0RoleKey = keyof typeof Auth0Role;

export const useUserRole = () => {
  const { user } = useAuth0();

  const isAccessible = useMemo<Record<Auth0RoleKey, boolean>>(() => {
    const userRoles: Array<string> = user?.user_roles ?? [];

    return Object.keys(Auth0Role).reduce(
      (acc, roleKey) => {
        const role = Auth0Role[roleKey as Auth0RoleKey];
        acc[roleKey as Auth0RoleKey] = userRoles.includes(role);
        return acc;
      },
      {} as Record<Auth0RoleKey, boolean>,
    );
  }, [user]);

  const hasRole = (...requiredRoles: Array<Auth0RoleKey>) => {
    return requiredRoles.some((role) => isAccessible[role]);
  };

  return { isAccessible, hasRole };
};
