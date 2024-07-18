import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { usePingQuery } from '@/graphql/types-and-hooks.g';

export const Home: FC = () => {
  const { data } = usePingQuery();

  return (
    <>
      <FontAwesomeIcon icon={faCoffee} className="text-remy-900" />
      {data?.ping}
    </>
  );
};
