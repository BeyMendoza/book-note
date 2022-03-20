import { useState } from 'react';
import ReactQuill from 'react-quill';
import styled from '@emotion/styled';
import 'react-quill/dist/quill.snow.css'; // ES6
import { formats, modules } from './configs';
import { withTheme, Card, Flexbox, fade } from 'book-ui-library';

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
  IoSend,
} from 'react-icons/io5';
import { createNote } from '../../core/Note';
import { useNotes } from '../../core/contexts/NotesContext';

export const WriteNodeEditor = withTheme(({ theme }) => {
  const [html, setHtml] = useState("<div contenteditable='false'></div>");

  const { addNote } = useNotes();

  return (
    <Card
      p={0}
      variant="outlined"
      borderColor="divider"
      className={() => `
          padding: 0px !important;
          &:hover {
            border-color: ${theme.palette.primary.main};
          }
          & .ql-bold {
            color: ${theme.palette.text.primary};
          }
          & .ql-snow  {
            color: ${theme.palette.text.primary};
            border-color: transparent !important;
          }
          & .ql-toolbar .ql-formats{
            color: ${theme.palette.text.primary};
          }
        `}
    >
      <ReactQuill value={html} modules={modules} formats={formats} placeholder="Write some note..." onChange={text => setHtml(text)} />

      <Flexbox p={7} justifyContent="flex-end">
        <Button
          onClick={() => {
            const newNote = createNote({
              chaper: 1,
              categories: ['test'],
              chapterName: 'text c',
              content: html,
            });
            addNote(newNote);
            console.log(newNote);
            setHtml('');
          }}
        >
          <IoSend size={22} color={theme.palette.text.primary} />
        </Button>
      </Flexbox>
    </Card>
  );
});

const StyledButton = styled.button`
  padding: 5px;
  border: none;
  cursor: pointer;
  border-radius: 10rem;
  background: ${props => fade(props.theme.palette.primary.main, 0)};
  &:hover {
    background: ${props => fade(props.theme.palette.primary.main, 0.05)};
  }
`;

const Button = withTheme(props => <StyledButton {...props} />);
