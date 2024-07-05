import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';

import { useBooksQuery } from '@/graphql/types-and-hooks.g';

export const Home: FC = () => {
  const [date, setDate] = useState('2024-12-15');

  const { data, refetch } = useBooksQuery();

  return (
    <>
      <FontAwesomeIcon icon={faCoffee} className="text-remy-500" />
      <span className='font-serif text-3xl'>Demo </span>
      <button
        className="bg-remy-500"
        onClick={() =>
          setDate((prev) =>
            prev === '2024-12-15' ? '2024-01-31' : '2024-12-15',
          )
        }
      >
        {date}
      </button>
      <button onClick={() => refetch()}>Test</button>
      <pre className="font-display text-2xl">
        {JSON.stringify(data, undefined, '  ')}
      </pre>
    </>
  );
};
