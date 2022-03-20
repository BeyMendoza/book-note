import React from 'react';
import { NoteCard } from '../../Components/NoteCard';
import { useNotes } from '../../core/contexts/NotesContext';
import { WriteNodeEditor } from '../../Components/WriteNodeEditor';

export const BookChapterNotes = () => {
  const { notes } = useNotes();

  return (
    <div>
      <WriteNodeEditor />
      <br />
      {notes.map((note, i) => (
        <NoteCard note={note} key={i} />
      ))}
    </div>
  );
};
