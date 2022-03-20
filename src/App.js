import { Card } from './lib/core';
import { Navbar } from './Components';
import { NoteCard } from './Components/NoteCard';
import { Container } from './Components/Container';
import { useNotes } from './core/contexts/NotesContext';
import { WriteNodeEditor } from './Components/WriteNodeEditor';

import './style.scss';

export default () => {
  const { notes } = useNotes();
  return (
    <>
      <Card style={{ borderRadius: 0, minHeight: '100vh', padding: 0 }} bg="background.default">
        <Navbar />
        <br />
        <Container style={{ padding: '1rem' }}>
          <WriteNodeEditor />
          <br />
          {notes.map((note, i) => (
            <NoteCard note={note} key={i} />
          ))}
        </Container>
      </Card>
    </>
  );
};
