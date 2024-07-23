import 'ckeditor5/ckeditor5.css';
import '@/components/Editor.scss';

import { useAuth0 } from '@auth0/auth0-react';
import { FC, ReactNode } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { Auth0Role, useUserRole } from '@/hooks';
import { DefaultBottomBar, DefaultLayout, DefaultTopBar } from '@/layouts';
import { NotLogged } from '@/pages/Common';
import { Home } from '@/pages/Home';
import { Posts } from '@/pages/Posts';

export const AppRoutes: FC = () => {
  const { isAuthenticated } = useAuth0();
  const { hasRole } = useUserRole();

  const authGuard = (
    element: ReactNode,
    requiredRoles?: Array<Auth0Role>,
  ): ReactNode => {
    if (!isAuthenticated) {
      return <Navigate to={`/not-logged?returnTo=${window.location.href}`} />;
    }

    if (requiredRoles?.length && !hasRole(...requiredRoles)) {
      return <Navigate to="/access-denied" />;
    }

    return element;
  };

  const routes = useRoutes([
    {
      path: '',
      element: (
        <DefaultLayout top={<DefaultTopBar />} bottom={<DefaultBottomBar />} />
      ),
      children: [
        {
          path: '/',
          index: true,
          element: <Home />,
        },
        {
          path: '/posts',
          index: true,
          element: <>Post</>,
        },
        {
          path: '/posts/:id',
          index: true,
          element: <>Post Detail</>,
        },
        {
          path: '/compacts',
          index: true,
          element: <>compacts</>,
        },
        {
          path: '/compacts/:id',
          index: true,
          element: <>compacts detail</>,
        },
        {
          path: '/photos',
          index: true,
          element: <>photos</>,
        },
        {
          path: '/photos/:id',
          index: true,
          element: <>photos detail</>,
        },
        { path: '/*', element: <>Not Found</> },
      ],
    },
    {
      path: '',
      element: <DefaultLayout top={<DefaultTopBar />} />,
      children: [
        {
          path: '/posts/:id/editor',
          index: true,
          element: authGuard(<Posts.Editor />, [Auth0Role.Administrator]),
        },
      ],
    },
    { path: '/not-logged', element: <NotLogged /> },
  ]);

  return <>{routes}</>;
};

export const App: FC = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div className="flex min-h-dvh items-center justify-center"></div>;
  }

  return <AppRoutes />;
};
