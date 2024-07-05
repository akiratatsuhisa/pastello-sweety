import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { NotLogged } from '@/pages/Common';
import { Home } from '@/pages/Home';

export const App: FC = () => {
  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <Home />,
    },
    { path: '/not-logged', element: <NotLogged /> },
  ]);

  return <>{routes}</>;
};
