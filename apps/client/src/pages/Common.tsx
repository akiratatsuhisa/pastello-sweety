import { useAuth0 } from '@auth0/auth0-react';
import { FC, useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const NotLogged: FC = () => {
  const { loginWithRedirect } = useAuth0();

  const [searchParams] = useSearchParams();

  useLayoutEffect(() => {
    loginWithRedirect({
      authorizationParams: {
        audience: import.meta.env.VITE_APP_AUTH0_AUDIENCE,
        redirect_uri: window.location.origin + '/callback',
        scope: 'profile email',
      },
      appState: { returnTo: searchParams.get('returnTo') ?? '/' },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};
