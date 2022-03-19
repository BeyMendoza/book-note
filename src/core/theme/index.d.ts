import { ReactNode } from 'react';

export interface ThemeContext {
  palette: any; // TODO
}

interface ThemeProviderProps {
  children?: ReactNode;
  mode?: 'light' | 'dark';
}
export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
