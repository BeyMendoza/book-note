import _ from 'lodash';
import { getTheme } from './defaultTheme';
import { createContext, useCallback, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, ...props }) => {
  const [mode, setMode] = useState(_.get(props, 'mode', 'light'));
  const [theme, setTheme] = useState(getTheme(_.get(props, 'mode', 'light')));
  useEffect(() => setTheme(getTheme(mode)), [mode]);

  const switchMode = useCallback(() => setMode(p => (p === 'dark' ? 'light' : 'dark')), []);

  return <ThemeContext.Provider value={{ theme, switchMode }}>{children}</ThemeContext.Provider>;
};
