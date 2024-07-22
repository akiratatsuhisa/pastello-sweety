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
        {
          path: '/blogs',
          index: true,
          element: <>Blog</>,
        },
        {
          path: '/blogs/:id',
          index: true,
          element: <>Blog Detail</>,
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
      ],
    },
    { path: '/not-logged', element: <NotLogged /> },
  ]);

  return <>{routes}</>;
};
