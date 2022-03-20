import App from './App';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './lib/core/theme';
import { BreakPointsProvider } from './lib/core/Breakpoints/Provider';
import { NotesContextProvider } from './core/contexts/NotesContext';

ReactDOM.render(
  <ThemeProvider mode="light">
    <BreakPointsProvider>
      <NotesContextProvider>
        <App />
      </NotesContextProvider>
    </BreakPointsProvider>
  </ThemeProvider>,

  document.getElementById('root'),
);
