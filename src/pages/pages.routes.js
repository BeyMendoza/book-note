import BookChapters from './BookChapters';
import BookChapterNotes from './BookChapterNotes';

export const PAGE_ROUTES = [
  {
    exact: false,
    Element: BookChapters,
    path: '/book/:bookId',
  },
  {
    exact: true,
    Element: BookChapterNotes,
    path: '/book/:bookId/chapter/:chapterId',
  },
];
