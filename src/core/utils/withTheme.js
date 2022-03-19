import { useTheme } from "../hooks/useTheme";

export const withTheme = (Component) => (props) => {
  const { theme } = useTheme();
  return <Component {...props} theme={theme} />;
};
