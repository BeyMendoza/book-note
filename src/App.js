import { Card } from './lib/core';
import { Navbar } from './Components';
import { BookChapterNotes } from './pages';
import { Container } from './Components/Container';
import './style.scss';

export default () => {
  return (
    <Card style={{ borderRadius: 0, minHeight: '100vh', padding: 0 }} bg="background.default">
      <Navbar />
      <br />
      <Container style={{ padding: '1rem' }}>
        <BookChapterNotes />
      </Container>
    </Card>
  );
};
