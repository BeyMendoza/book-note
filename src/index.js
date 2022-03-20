import App from './App';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './lib/core/theme';
import { BreakPointsProvider } from './lib/core/Breakpoints/Provider';

ReactDOM.render(
  <ThemeProvider mode="light">
    <BreakPointsProvider>
      <App />
    </BreakPointsProvider>
  </ThemeProvider>,

  document.getElementById('root'),
);
