import { useTheme } from '../hooks/useTheme';
import { useBreakPoints } from '../hooks/useBreakPoints';

export const withTheme = Component => props => {
  const { theme } = useTheme();
  const { mediaQueries, screen } = useBreakPoints();
  return <Component {...props} theme={{ ...theme, mediaQueries, screen }} />;
};
