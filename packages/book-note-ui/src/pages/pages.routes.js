import BookChapters from './BookChapters';
import BookChapterNotes from './BookChapterNotes';
import WorkSpace from './WorkSpace';

export const PAGE_ROUTES = [
  {
    exact: true,
    Element: WorkSpace,
    path: '/',
  },
  {
    exact: true,
    Element: BookChapters,
    path: '/book/:bookId',
  },
  {
    exact: true,
    Element: BookChapterNotes,
    path: '/book/:bookId/chapter/:chapterId',
  },
];
