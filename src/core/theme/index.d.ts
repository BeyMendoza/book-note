import { ReactNode } from 'react';

export type Color =
  | 'text.primary'
  | 'text.secondary'
  | 'text.disabled'
  | 'primary.main'
  | 'primary.dark'
  | 'primary.light'
  | 'error.main'
  | 'error.dark'
  | 'error.light'
  | 'success.main'
  | 'success.dark'
  | 'success.light'
  | 'warning.main'
  | 'warning.dark'
  | 'warning.light'
  | 'divider'
  | 'common.black'
  | 'common.white'
  | 'grey.100'
  | 'grey.200'
  | 'grey.300'
  | 'grey.400'
  | 'grey.500'
  | 'grey.600'
  | 'grey.700'
  | 'grey.800'
  | 'grey.900'
  | 'background.paper'
  | 'background.default';

export type ColorTones = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type ThemeColor = {
  light: string;
  main: string;
  dark: string;
};

export type Palette = {
  common: {
    white: string;
    black: string;
  };
  grey: ColorTones;
  text: ThemeColor;
  divider: string;
  primary: ThemeColor;
  success: ThemeColor;
  info: ThemeColor;
  warning: ThemeColor;
  error: ThemeColor;
};

export interface ThemeContext {
  palette: Palette;
}

export type StyleThemeCallback = (theme: ThemeContext) => React.CSSProperties;
export type ClassThemeCallback = (theme: ThemeContext) => string;

interface ThemeProviderProps {
  children?: ReactNode;
  mode?: 'light' | 'dark';
}
export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
