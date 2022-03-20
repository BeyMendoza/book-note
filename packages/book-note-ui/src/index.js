import App from './App';
import ReactDOM from 'react-dom';
import { ThemeProvider, BreakPointsProvider } from 'book-ui-library';
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
