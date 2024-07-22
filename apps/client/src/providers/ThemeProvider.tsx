import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { useEventListener, useMediaQuery } from 'usehooks-ts';

enum ThemeActionKind {
  SET_COLOR = 'SET_COLOR',
  SET_IS_TOP_BAR_OPEN = 'SET_IS_TOP_BAR_OPEN',
  SET_IS_BOTTOM_BAR_OPEN = 'SET_IS_BOTTOM_BAR_OPEN',
  RESET_APP_BAR_OPEN = 'RESET_APP_BAR_OPEN',
}

type ThemeAction =
  | {
      type: ThemeActionKind.SET_COLOR;
      payload: ColorType | undefined;
    }
  | {
      type:
        | ThemeActionKind.SET_IS_TOP_BAR_OPEN
        | ThemeActionKind.SET_IS_BOTTOM_BAR_OPEN;
      payload: boolean;
    }
  | {
      type: ThemeActionKind.RESET_APP_BAR_OPEN;
    };

interface ThemeState {
  color: ColorType;
  isTopBarOpen: boolean;
  isBottomBarOpen: boolean;
}

export type ColorType =
  | 'remy'
  | 'perano'
  | 'vanilla'
  | 'linen'
  | 'madang'
  | 'riptide'
  | 'spray'
  | 'anakiwa'
  | 'perfume'
  | 'french-lilac'
  | 'cosmos'
  | 'karry'
  | 'lemon-chiffon';

const defaultTheme: ThemeState = {
  color: 'remy',
  isTopBarOpen: false,
  isBottomBarOpen: false,
};

const ThemeContext = createContext<
  ThemeState & {
    isMobile: boolean;
    isDesktop: boolean;
    setColor: (payload: ColorType) => void;
    setIsTopBarOpen: (payload: boolean) => void;
    setIsBottomBarOpen: (payload: boolean) => void;
  }
>({
  isMobile: false,
  isDesktop: true,
  color: defaultTheme.color,
  isTopBarOpen: defaultTheme.isTopBarOpen,
  isBottomBarOpen: defaultTheme.isBottomBarOpen,
  setColor: () => {},
  setIsTopBarOpen: () => {},
  setIsBottomBarOpen: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (color?: ColorType) => {
  const context = useContext(ThemeContext);

  useEffect(() => {
    if (!color) {
      return;
    }

    const { setColor } = context;

    setColor(color);

    return () => setColor(defaultTheme.color);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  return context;
};

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case ThemeActionKind.SET_COLOR:
      return {
        ...state,
        color: action.payload ?? defaultTheme.color,
      };
    case ThemeActionKind.SET_IS_TOP_BAR_OPEN:
    case ThemeActionKind.SET_IS_BOTTOM_BAR_OPEN:
      return {
        ...state,
        [action.type === ThemeActionKind.SET_IS_TOP_BAR_OPEN
          ? 'isTopBarOpen'
          : 'isBottomBarOpen']: action.payload,
      };
    case ThemeActionKind.RESET_APP_BAR_OPEN:
      return {
        ...state,
        isTopBarOpen: false,
        isBottomBarOpen: false,
      };
    default:
      return state;
  }
}

interface IThemeProps {
  children?: ReactNode;
}

export const ThemeProvider: FC<IThemeProps> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, defaultTheme);

  const setColor = (payload: ColorType) => {
    dispatch({ type: ThemeActionKind.SET_COLOR, payload });
  };

  const setIsTopBarOpen = (payload: boolean) => {
    dispatch({ type: ThemeActionKind.SET_IS_TOP_BAR_OPEN, payload });
  };

  const setIsBottomBarOpen = (payload: boolean) => {
    dispatch({ type: ThemeActionKind.SET_IS_BOTTOM_BAR_OPEN, payload });
  };

  const { isTopBarOpen, isBottomBarOpen } = state;

  useEffect(() => {
    const isAnyOpen = isTopBarOpen || isBottomBarOpen;

    if (isAnyOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [isTopBarOpen, isBottomBarOpen]);

  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEventListener('resize', () => {
    if (isDesktop) {
      dispatch({ type: ThemeActionKind.RESET_APP_BAR_OPEN });
    }
  });

  return (
    <ThemeContext.Provider
      value={{
        isMobile: !isDesktop,
        isDesktop,
        ...state,
        setColor,
        setIsTopBarOpen,
        setIsBottomBarOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
