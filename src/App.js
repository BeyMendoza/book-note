import { Card, Text } from './core';
import { ThemeProvider } from './core/theme';
import './style.scss';

export default () => {
  return (
    <ThemeProvider mode="dark">
      <Card style={{ borderRadius: 0, minHeight: '100vh', padding: '3rem' }} bg="background.default">
        <Card outlined>
          <Text variant="h1" color="primary.main">
            Hello React!
          </Text>
          <Text variant="h2">Hello React!</Text>
          <Text variant="h3">Hello React!</Text>
          <Text variant="h4">Hello React!</Text>
          <Text variant="h5">Hello React!</Text>
          <Text variant="h6">Hello React!</Text>
          <Text variant="subtitle1">Hello React!</Text>
          <Text variant="subtitle2">Hello React!</Text>
          <Text variant="body1">Hello React!</Text>
          <Text variant="body2">Hello React!</Text>
          <Text variant="button">Hello React!</Text>
          <Text variant="caption">Hello React!</Text>
          <Text variant="overline">Hello React!</Text>
        </Card>
      </Card>
    </ThemeProvider>
  );
};
