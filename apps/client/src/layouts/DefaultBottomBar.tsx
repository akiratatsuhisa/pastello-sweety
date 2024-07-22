import {
  faBook,
  faClapperboard,
  faImage,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';

import { useTheme } from '@/providers';

const items: Array<{ label: string; icon: IconDefinition }> = [
  { label: 'Posts', icon: faBook },
  { label: 'Compacts', icon: faClapperboard },
  { label: 'Photos', icon: faImage },
];

export const DefaultBottomBar: FC = () => {
  const { color, isDesktop } = useTheme();

  const [activeIndex, setActiveIndex] = useState(0);

  if (isDesktop) {
    return <></>;
  }

  return (
    <>
      <div
        className={`solid sticky bottom-0 flex-initial border-t border-${color}-950 bg-white`}
      >
        <div className="app-container relative flex h-16 w-full items-center justify-between px-4">
          <div className="app-container pointer-events-none absolute inset-0 flex px-4">
            {items.map((_v, key) =>
              !key ? (
                <div
                  key={`line-${key}`}
                  className="relative flex-1 transition-all duration-300 ease-in"
                  style={{
                    transform: `translateX(calc(${activeIndex} * 100%))`,
                  }}
                >
                  <div
                    className={`absolute inset-x-0 top-0 mx-4 h-1 rounded-b-full bg-${color}-700`}
                  ></div>
                </div>
              ) : (
                <div key={`line-${key}`} className="flex-1"></div>
              ),
            )}
          </div>

          {items.map(({ label, icon }, key) => (
            <button
              key={`menu-${key}`}
              className={`flex h-full flex-1 flex-col items-center justify-around truncate p-2 text-${color}-${key === activeIndex ? '700' : '600'}`}
              onClick={() => setActiveIndex(key)}
            >
              <FontAwesomeIcon icon={icon} className="size-5" />
              <span className="text-sm font-semibold">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
