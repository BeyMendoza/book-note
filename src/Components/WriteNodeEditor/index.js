import { useState } from 'react';
import ReactQuill from 'react-quill';
import styled from '@emotion/styled';
import 'react-quill/dist/quill.snow.css'; // ES6
import { Card, Flexbox } from '../../core';
import { fade } from '../../core/utils/fade';
import { withTheme } from '../../core/middlewares/withTheme';

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

const Button = withTheme(props => {
  return <StyledButton {...props} />;
});

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];
export const WriteNodeEditor = withTheme(({ theme }) => {
  const [html, setHtml] = useState("<div contenteditable='false'></div>");
  return (
    <Card
      variant="outlined"
      borderColor="divider"
      className={() => `
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
      <ReactQuill
        value={html}
        modules={modules}
        formats={formats}
        placeholder="Write some note..."
        onChange={text => setHtml(text)}
      />

      <Flexbox pl={7} justifyContent="space-between">
        <Flexbox pl={7}>
          <Button>
            <IoCodeSlash size={22} color={theme.palette.text.primary} />
          </Button>
          <Button>
            <IoAtSharp size={22} color={theme.palette.text.primary} />
          </Button>
        </Flexbox>
        <Button>
          <IoSendOutline size={22} color={theme.palette.text.primary} />
        </Button>
      </Flexbox>
    </Card>
  );
});
