import { createContext, useState, useContext, useCallback, useMemo } from 'react';

export const NotesContext = createContext({});

export const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = useCallback(note => setNotes(p => [note, ...p]), []);

  const values = useMemo(
    () => ({
      notes,
      addNote,
    }),
    [notes],
  );

  return <NotesContext.Provider value={values}>{children}</NotesContext.Provider>;
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error('Wrap use Theme inside ThemeContext');
  return context;
};
