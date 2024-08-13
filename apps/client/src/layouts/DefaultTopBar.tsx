import { useAuth0 } from '@auth0/auth0-react';
import {
  faChevronRight,
  faCog,
  faIdCard,
  faPlus,
  faSearch,
  faSignIn,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { FC, MouseEventHandler, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEventListener, useMediaQuery } from 'usehooks-ts';
import { enums } from 'utils';

import { Typography } from '@/components';
import { useCreatePostMutation } from '@/graphql/types-and-hooks.g';
import { navTabs, useNavTab, useUserRole } from '@/hooks';
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

const Navigation: FC<JSX.IntrinsicElements['div']> = ({
  className,
  ...props
}) => {
  const { isMobile, color } = useTheme();

  const { activeTabIndex } = useNavTab();

  if (isMobile) {
    return <></>;
  }

  return (
    <div className={`relative flex h-full ${className ?? ''}`} {...props}>
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
                className={`absolute inset-x-0 bottom-0 mx-3 h-1 rounded-t-full bg-${color}-700`}
              ></div>
            </div>
          ) : (
            <div key={`line-${key}`} className="flex-1"></div>
          ),
        )}
      </div>

      {navTabs.map(({ icon, to }, key) => (
        <NavLink
          key={`menu-${key}`}
          className={`flex h-full flex-1 flex-col items-center justify-around truncate px-6 py-3 text-${color}-${key === activeTabIndex ? '700' : '600'}`}
          to={to}
        >
          <FontAwesomeIcon icon={icon} className="size-6" />
        </NavLink>
      ))}
    </div>
  );
};

const Search: FC = () => {
  const isScreenLg = useMediaQuery('(min-width: 1024px)');

  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const [searchText, setSearchText] = useState('');

  useEventListener('resize', () => {
    if (isScreenLg) {
      setIsOpenDialog(false);
    }
  });

  const onSearch = () => {
    if (!searchText) {
      return;
    }

    alert(searchText);
  };

  const onClick = () => {
    if (!isScreenLg) {
      setIsOpenDialog((prev) => !prev);
      return;
    }

    onSearch();
  };

  return (
    <>
      <div className="tems-center flex">
        <input
          className="solid hidden w-40 border border-black px-3 outline-none lg:block"
          type="text"
          value={searchText}
          onInput={(event) => setSearchText(event.currentTarget.value)}
          placeholder="Enter to search..."
        />

        <button
          className={`flex size-10 items-center justify-center bg-black text-white`}
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <Dialog
        open={isOpenDialog}
        onClose={() => setIsOpenDialog(false)}
        transition
        className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/70" />

        <div className="fixed inset-0 flex w-screen justify-center p-6">
          <button
            className="absolute right-6 top-6 size-10"
            onClick={() => setIsOpenDialog(false)}
          >
            <div className={`${lineClass} top-1/2 rotate-45 bg-white`}></div>
            <div className={`${lineClass} top-1/2 -rotate-45 bg-white`}></div>
          </button>

          <DialogPanel className="w-full max-w-lg space-y-4 overflow-auto">
            <Typography className="font-serif text-4xl font-semibold text-white">
              Search
            </Typography>

            <div className="solid flex w-full items-center gap-3 border-b-2 border-white px-3 py-2">
              <input
                className="w-full bg-transparent text-3xl text-white outline-none"
                type="text"
                value={searchText}
                onInput={(event) => setSearchText(event.currentTarget.value)}
                placeholder="Enter here..."
              />

              <FontAwesomeIcon
                className="size-6 text-white"
                role="button"
                icon={faSearch}
                onClick={onSearch}
              />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

const WritePostButton: FC<JSX.IntrinsicElements['button']> = ({
  className,
  onClick,
  ...props
}) => {
  const { color } = useTheme();

  const { hasRole } = useUserRole();

  const navigate = useNavigate();
  const location = useLocation();

  const [mutation, { loading }] = useCreatePostMutation();

  const onClickButton: MouseEventHandler<HTMLButtonElement> = async (event) => {
    if (loading) {
      return;
    }

    const result = await mutation({
      variables: { input: { title: 'Unnamed Post' } },
    });

    onClick?.(event);

    navigate(`/posts/${result.data?.createdPost.id}/editor`);
  };

  if (
    !hasRole(enums.Auth0Role.Administrator) ||
    /^\/posts\/\d+\/editor$/.test(location.pathname)
  ) {
    return <></>;
  }

  return (
    <button
      className={`flex items-center justify-center gap-2 px-3 py-2 font-semibold text-white bg-${color}-700 ${className} ${loading ? 'opacity-70' : ''}`}
      onClick={onClickButton}
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

  const navigate = useNavigate();

  const onLogin = () => {
    loginWithRedirect({
      appState: { returnTo: window.location.href },
    });
  };

  return (
    <>
      <div
        className={`solid sticky top-0 z-20 flex-initial border-b border-${color}-950 bg-white`}
      >
        <div className="app-container flex h-16 w-full items-center justify-between px-3">
          <Typography
            as="div"
            className="cursor-pointer font-display text-4xl font-bold"
            onClick={() => navigate('/')}
          >
            Pastello Sweety
          </Typography>

          <Navigation />

          <div className="flex items-center gap-3">
            <Search />

            {isDesktop && <WritePostButton />}

            {isAuthenticated ? (
              <UserProfile />
            ) : (
              isDesktop && (
                <button className="font-semibold" onClick={onLogin}>
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

            {navTabs.map(({ icon, label, to }, key) => (
              <NavLink
                key={key}
                to={to}
                className={`solid flex items-center justify-between gap-2 border-b-2 px-3 py-2 font-bold border-${color}-700 text-${color}-700`}
                onClick={() => setIsTopBarOpen(false)}
              >
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={icon} />
                  <span>{label}</span>
                </div>

                <FontAwesomeIcon icon={faChevronRight} />
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <NavLink
              to="/settings"
              className={`solid flex items-center justify-between gap-2 border-b-2 px-3 py-2 font-bold border-${color}-700 text-${color}-700`}
              onClick={() => setIsTopBarOpen(false)}
            >
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faCog} />
                <span>Settings</span>
              </div>

              <FontAwesomeIcon icon={faChevronRight} />
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
                onClick={onLogin}
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
