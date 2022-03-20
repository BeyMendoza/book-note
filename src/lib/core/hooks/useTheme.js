import { useContext } from 'react';
import { ThemeContext } from '../theme/Provider';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('Wrap use Theme inside ThemeContext');
  return context;
};
