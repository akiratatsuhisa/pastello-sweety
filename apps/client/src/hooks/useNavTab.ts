import {
  faBook,
  faClapperboard,
  faHome,
  faImage,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { To, useLocation } from 'react-router-dom';

export const navTabs: Array<{
  label: string;
  icon: IconDefinition;
  matcher: RegExp;
  to: To;
}> = [
  { label: 'Home', icon: faHome, matcher: /^\/$/, to: { pathname: '/' } },
  {
    label: 'Posts',
    icon: faBook,
    matcher: /^\/posts/,
    to: { pathname: '/posts' },
  },
  {
    label: 'Compacts',
    icon: faClapperboard,
    matcher: /^\/compacts/,
    to: { pathname: '/compacts' },
  },
  {
    label: 'Photos',
    icon: faImage,
    matcher: /^\/photos/,
    to: { pathname: '/photos' },
  },
];

export const useNavTab = () => {
  const location = useLocation();

  const [activeTabIndex, setActiveTabIndex] = useState(-1);

  useEffect(() => {
    const matchedNavTabIndex = navTabs.findIndex((navTab) =>
      location.pathname.match(navTab.matcher),
    );

    setActiveTabIndex(matchedNavTabIndex);
  }, [location]);

  return {
    activeTabIndex,
  };
};
