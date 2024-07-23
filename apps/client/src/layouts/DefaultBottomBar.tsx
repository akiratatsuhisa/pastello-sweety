import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { navTabs, useNavTab } from '@/hooks';
import { useTheme } from '@/providers';

export const DefaultBottomBar: FC = () => {
  const { color, isDesktop } = useTheme();

  const { activeTabIndex } = useNavTab();

  if (isDesktop) {
    return <></>;
  }

  return (
    <>
      <div
        className={`solid sticky bottom-0 flex-initial border-t border-${color}-950 bg-white`}
      >
        <div className="app-container relative flex h-16 w-full items-center justify-between px-3">
          <div className="app-container pointer-events-none absolute inset-0 flex px-3">
            {navTabs.map((_v, key) =>
              !key && activeTabIndex >= 0 ? (
                <div
                  key={`line-${key}`}
                  className="relative flex-1 transition-all duration-300 ease-in"
                  style={{
                    transform: `translateX(calc(${activeTabIndex} * 100%))`,
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

          {navTabs.map(({ label, icon, to }, key) => (
            <NavLink
              key={`menu-${key}`}
              className={`flex h-full flex-1 flex-col items-center justify-around truncate p-2 text-${color}-${key === activeTabIndex ? '700' : '600'}`}
              to={to}
            >
              <FontAwesomeIcon icon={icon} className="size-5" />
              <span className="text-sm font-semibold">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
