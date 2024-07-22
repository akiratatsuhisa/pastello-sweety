import { useAuth0 } from '@auth0/auth0-react';
import {
  faIdCard,
  faPlus,
  faSignIn,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Typography } from '@/components';
import { Auth0Role, navTabs, useNavTab, useUserRole } from '@/hooks';
import { useTheme } from '@/providers';

const lineClass = `absolute h-0.5 w-full bg-black transition-all duration-300 ease-in-out`;

const AppMenuButton: FC = () => {
  const { isTopBarOpen, setIsTopBarOpen } = useTheme();

  return (
    <button
      className="relative size-10"
      onClick={() => setIsTopBarOpen(!isTopBarOpen)}
    >
      <div
        className={`${lineClass} ${isTopBarOpen ? 'top-1/2 rotate-45' : 'top-1/4'}`}
      ></div>
      <div
        className={`${lineClass} ${isTopBarOpen ? 'top-1/2 scale-0' : 'top-1/2'}`}
      ></div>
      <div
        className={`${lineClass} ${isTopBarOpen ? 'top-1/2 -rotate-45' : 'top-3/4'}`}
      ></div>
    </button>
  );
};

const Navigation: FC = () => {
  const { isMobile, color } = useTheme();

  const { activeTabIndex } = useNavTab();

  if (isMobile) {
    return <></>;
  }

  return (
    <div className="relative flex h-full">
      <div className="pointer-events-none absolute inset-0 flex">
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
                className={`absolute inset-x-0 bottom-0 mx-4 h-1 rounded-t-full bg-${color}-900`}
              ></div>
            </div>
          ) : (
            <div key={`line-${key}`} className="flex-1"></div>
          ),
        )}
      </div>

      {navTabs.map(({ label, to }, key) => (
        <NavLink
          key={`menu-${key}`}
          className={`flex h-full flex-1 flex-col items-center justify-around truncate px-4 text-xl ${key === activeTabIndex ? 'font-semibold' : ''} text-${color}-900 `}
          to={to}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};

const WritePostButton: FC<JSX.IntrinsicElements['button']> = ({
  className,
  ...props
}) => {
  const { color } = useTheme();

  const { hasRole } = useUserRole();

  if (!hasRole(Auth0Role.Administrator)) {
    return <></>;
  }

  return (
    <button
      className={`flex items-center justify-center gap-2 px-3 py-2 font-semibold text-white bg-${color}-700 ${className}`}
      {...props}
    >
      <FontAwesomeIcon icon={faPlus} />
      <span>Write a Post</span>
    </button>
  );
};

const UserProfile: FC = () => {
  const { color } = useTheme();

  const { user } = useAuth0();

  if (!user) {
    return <></>;
  }

  return (
    <div className={`solid size-10 border border-${color}-950 object-cover`}>
      <img src={user.picture} alt={user.name} />
    </div>
  );
};

export const DefaultTopBar: FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const { color, isDesktop, isMobile, isTopBarOpen, setIsTopBarOpen } =
    useTheme();

  return (
    <>
      <div
        className={`solid sticky top-0 z-20 flex-initial border-b border-${color}-950 bg-white`}
      >
        <div className="app-container flex h-16 w-full items-center justify-between px-4">
          <Typography as="div" className="font-display text-4xl font-bold">
            Pastello Sweety
          </Typography>

          <Navigation />

          <div className="flex items-center gap-4">
            {isDesktop && <WritePostButton />}

            {isAuthenticated ? (
              <UserProfile />
            ) : (
              isDesktop && (
                <button
                  className="font-semibold"
                  onClick={() => loginWithRedirect({})}
                >
                  Login / Register
                </button>
              )
            )}

            {isMobile && <AppMenuButton />}
          </div>
        </div>
      </div>

      {isMobile && (
        <div
          className={`fixed inset-0 top-16 z-10 flex flex-col items-stretch justify-between gap-5 overflow-auto p-5 pb-10 transition-all duration-300 ease-out bg-${color}-100 ${isTopBarOpen ? '' : '-translate-y-full'}`}
        >
          <div className="flex flex-col gap-5">
            <WritePostButton onClick={() => setIsTopBarOpen(false)} />

            {navTabs.map(({ label, to }, key) => (
              <NavLink
                key={key}
                to={to}
                className={`solid border-b-2 px-3 py-2 text-center font-bold border-${color}-700 text-${color}-700`}
                onClick={() => setIsTopBarOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <NavLink
              to="/settings"
              className={`solid border-b-2 px-3 py-2 text-center font-bold border-${color}-700 text-${color}-700`}
              onClick={() => setIsTopBarOpen(false)}
            >
              Settings
            </NavLink>

            {isAuthenticated ? (
              <button
                className={`flex items-center justify-center gap-2 px-3 py-2 font-semibold text-white bg-${color}-700`}
                onClick={() => logout()}
              >
                <FontAwesomeIcon icon={faSignOut} />
                <span>Logout</span>
              </button>
            ) : (
              <button
                className={`flex items-center justify-center gap-2 px-3 py-2 font-semibold text-white bg-${color}-700`}
                onClick={() => loginWithRedirect({})}
              >
                <FontAwesomeIcon icon={faSignIn} />
                <span>Login</span>
                <span>OR</span>
                <span>Register</span>
                <FontAwesomeIcon icon={faIdCard} />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
