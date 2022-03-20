import { withRouter } from 'book-ui-library';
import { NoteCard } from '../../Components/NoteCard';
import { useNotes } from '../../core/contexts/NotesContext';
import { WriteNodeEditor } from '../../Components/WriteNodeEditor';

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
