import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { NotLogged } from '@/pages/Common';
import { Home } from '@/pages/Home';

import { DefaultBottomBar, DefaultLayout, DefaultTopBar } from './layouts';

export const App: FC = () => {
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
      ],
    },
    { path: '/not-logged', element: <NotLogged /> },
  ]);

  return <>{routes}</>;
};
