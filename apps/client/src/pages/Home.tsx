import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';

import { usePingQuery } from '@/graphql/types-and-hooks.g';
import { ColorType, useTheme } from '@/providers';

export const Home: FC = () => {
  const { data } = usePingQuery();

  const [currentColor, setCurrentColor] = useState<ColorType>('remy');
  const { color } = useTheme(currentColor);

  return (
    <div className="app-container p-4">
      <FontAwesomeIcon icon={faCoffee} className={`text-${color}-900`} />
      <div
        className="text-center font-display text-9xl"
        onClick={() => {
          setCurrentColor((prev) => (prev === 'remy' ? 'perfume' : 'remy'));
        }}
      >
        Không khả dụng
        Pong
        <br />
        {data?.ping}
      </div>
      <p className="mb-3 font-sans text-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        assumenda, ullam eaque ad aliquam doloribus fuga cumque! Expedita natus
        laudantium placeat reprehenderit at, facere mollitia, nulla facilis ex
        dolore quasi!
      </p>
      <p className="mb-3 font-sans text-4xl font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        assumenda, ullam eaque ad aliquam doloribus fuga cumque! Expedita natus
        laudantium placeat reprehenderit at, facere mollitia, nulla facilis ex
        dolore quasi!
      </p>
      <p className="mb-3 font-sans text-4xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        assumenda, ullam eaque ad aliquam doloribus fuga cumque! Expedita natus
        laudantium placeat reprehenderit at, facere mollitia, nulla facilis ex
        dolore quasi!
      </p>
    </div>
  );
};
