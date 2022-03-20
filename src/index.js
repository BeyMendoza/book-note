import App from './App';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './core/theme';
import { BreakPointsProvider } from './core/Breakpoints/Provider';

ReactDOM.render(
  <ThemeProvider mode="light">
    <BreakPointsProvider>
      <App />
    </BreakPointsProvider>
  </ThemeProvider>,

  document.getElementById('root'),
);
