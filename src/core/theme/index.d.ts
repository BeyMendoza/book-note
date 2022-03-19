import { ReactNode } from 'react';

type Color =
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

export interface ThemeContext {
  palette: any; // TODO
}

interface ThemeProviderProps {
  children?: ReactNode;
  mode?: 'light' | 'dark';
}
export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
