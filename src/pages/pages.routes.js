import BookChapterNotes from './BookChapterNotes';

export const PAGE_ROUTES = [
  {
    exact: true,
    Element: BookChapterNotes,
    path: '/book/:bookId/chapter/:chapterId',
  },
];
