import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { usePingQuery } from '@/graphql/types-and-hooks.g';

export const Home: FC = () => {
  const { data } = usePingQuery();

  return (
    <div className="app-container">
      <FontAwesomeIcon icon={faCoffee} className="text-remy-900" />
      <div className="font-display text-9xl">Pong {data?.ping}</div>
      <div className="font-display text-9xl font-bold">Đặng Minh Đạt</div>
      <div className="font-display text-9xl">Đặng Minh Đạt</div>
    </div>
  );
};
