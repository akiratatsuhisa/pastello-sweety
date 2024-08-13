import { useAuth0 } from '@auth0/auth0-react';
import { useMemo } from 'react';
import { enums } from 'utils';

export type Auth0RoleKey = keyof typeof enums.Auth0Role;

export const useUserRole = () => {
  const { user } = useAuth0();

  const isAccessible = useMemo<Record<Auth0RoleKey, boolean>>(() => {
    const userRoles: Array<string> = user?.user_roles ?? [];

    return Object.keys(enums.Auth0Role).reduce(
      (acc, roleKey) => {
        const role = enums.Auth0Role[roleKey as Auth0RoleKey];
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
