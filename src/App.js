import parse from 'html-react-parser';

import { Card, Flexbox, Text } from './lib/core';
import { Navbar } from './Components';
import { useTheme } from './lib/core/hooks/useTheme';
import { Container } from './Components/Container';
import { useBreakPoints } from './lib/core/hooks/useBreakPoints';

import styled from '@emotion/styled';
import { fade } from './lib/core/utils/fade';

import { useState } from 'react';
import {
  IoImageOutline,
  IoAtSharp,
  IoSendOutline,
  IoEllipsisVertical,
  IoDocumentTextOutline,
  IoBookmarkOutline,
  IoCodeSlash,
  IoBookmark,
  IoLogoGithub,
  IoMenuSharp,
  IoServerOutline,
} from 'react-icons/io5';

import './style.scss';
import { withTheme } from './lib/core/middlewares/withTheme';
import { WriteNodeEditor } from './Components/WriteNodeEditor';
import { useNotes } from './core/contexts/NotesContext';

const StyledButton = styled.button`
  padding: 5px;
  border-radius: 10rem;
  border: none;
  cursor: pointer;
  background: ${props => fade(props.theme.palette.primary.main, 0)};
  &:hover {
    background: ${props => fade(props.theme.palette.primary.main, 0.05)};
  }
`;

const Button = withTheme(props => {
  return <StyledButton {...props} />;
});

export default () => {
  const { screen } = useBreakPoints();
  const { switchMode, theme } = useTheme();

  const { notes, addNote } = useNotes();

  const [html, setHtml] = useState("<div contenteditable='false'></div>");
  return (
    <>
      <Card style={{ borderRadius: 0, minHeight: '100vh', padding: 0 }} bg="background.default">
        <Navbar>
          <Text variant="body2" color="primary.main" style={{ margin: 0 }}>
            Title
          </Text>

          <Text variant="body2" style={{ margin: 0 }}>
            Screen Device: {screen}
          </Text>
          <button onClick={() => switchMode()}>Switch: {theme.palette.mode === 'dark' ? 'light' : 'dark'}</button>
        </Navbar>
        <br />
        <Container style={{ padding: '1rem' }}>
          <WriteNodeEditor />
          <br />

          {notes.map((note, i) => {
            return (
              <Card
                key={i}
                borderColor="divider"
                variant="outlined"
                className={theme => `
                  margin-bottom: 1rem;
                  & img {
                    width : 100%;
                  }
                  &:hover {
                    border-color: ${theme.palette.primary.main};
                  }
                `}
              >
                {parse(note.content)}
              </Card>
            );
          })}
        </Container>
      </Card>
    </>
  );
};
