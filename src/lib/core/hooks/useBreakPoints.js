import { useContext } from 'react';
import { BreakPointsContext } from '../Breakpoints/Provider';

export const useBreakPoints = () => {
  const context = useContext(BreakPointsContext);
  if (!context) throw new Error('Wrap useBreakPoints inside BreakPointsContext');
  return context;
};
