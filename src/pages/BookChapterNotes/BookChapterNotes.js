import React from 'react';

import { NoteCard } from '../../Components/NoteCard';
import { useNotes } from '../../core/contexts/NotesContext';
import { WriteNodeEditor } from '../../Components/WriteNodeEditor';
import { withRouter } from '../../lib/core/middlewares/withRouter';

const BookChapterNotes = props => {
  const { notes } = useNotes();

  return (
    <>
      <WriteNodeEditor />
      <br />
      {notes.map((note, i) => (
        <NoteCard note={note} key={i} />
      ))}
    </>
  );
};

export default withRouter(BookChapterNotes);
