import React from 'react';
import moment from 'moment';
import { Avatar } from '../Avatar';
import parse from 'html-react-parser';
import { IconButton } from '../IconButton';
import { Card, Flexbox, Text } from 'book-ui-library';
import { IoEllipseSharp, IoEllipsisVertical, IoBookmarkOutline } from 'react-icons/io5';

export const NoteCard = ({ note, ...props }) => {
  return (
    <Card
      borderColor="divider"
      variant="outlined"
      className={theme => `
                  color : ${theme.palette.text.primary};
                  margin-bottom: 1rem;
                  & img {
                    width : 100%;
                  }
                  & ol, & ul {
                    margin-left: 1rem;
                  }
                  &:hover {
                    border-color: ${theme.palette.primary.main};
                  }
                `}
    >
      <Flexbox mb={20} justifyContent="space-between">
        <Flexbox>
          <Avatar shape="rounded" size={3} />{' '}
          <Flexbox direction="column" ml={10}>
            <Text
              variant="subtitle2"
              style={{
                margin: 0,
              }}
            >
              Test - Driven Development with React Native{' '}
            </Text>{' '}
            <Flexbox alignItems="center" mt={4}>
              <Text
                variant="body2"
                style={{
                  margin: 0,
                  marginRight: 3,
                }}
              >
                Book Title Here{' '}
              </Text>{' '}
              <Text
                variant="body2"
                color="grey.700"
                style={{
                  margin: 0,
                }}
              >
                <IoEllipseSharp size={6} />{' '}
              </Text>
              <Text
                variant="caption"
                style={{
                  margin: 0,
                  marginLeft: 3,
                }}
              >
                Book Title Here{' '}
              </Text>{' '}
            </Flexbox>{' '}
          </Flexbox>{' '}
        </Flexbox>{' '}
        <Flexbox>
          <IconButton size={2}>
            <IoBookmarkOutline size={18} />{' '}
          </IconButton>{' '}
          <IconButton size={2}>
            <IoEllipsisVertical size={18} />{' '}
          </IconButton>{' '}
        </Flexbox>{' '}
      </Flexbox>{' '}
      <div className="innerHtml"> {parse(note.content)} </div>
      {note.categories.map((category, i) => {
        return (
          <Text key={i} color="primary.main" variant="body2">
            {' '}
            #{category}{' '}
          </Text>
        );
      })}
      <Text
        color="text.disabled"
        variant="caption"
        style={{
          margin: 0,
        }}
      >
        {' '}
        {moment(note.createdAt).fromNow()}{' '}
      </Text>{' '}
    </Card>
  );
};
