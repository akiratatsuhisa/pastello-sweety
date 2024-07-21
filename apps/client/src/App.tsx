import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { NotLogged } from '@/pages/Common';
import { Home } from '@/pages/Home';

import { DefaultHeader } from './layouts/DefaultHeader';
import { DefaultLayout } from './layouts/DefaultLayout';

export const App: FC = () => {
  const routes = useRoutes([
    {
      path: '',
      element: <DefaultLayout top={<DefaultHeader />} />,
      children: [
        {
          path: '/',
          index: true,
          element: <Home />,
        },
      ],
    },
    { path: '/not-logged', element: <NotLogged /> },
  ]);

  return <>{routes}</>;
};
