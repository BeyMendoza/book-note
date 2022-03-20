import { generateID } from './utils/Id';

export type CreateNotePayload = {
  content: string;
  chaper: number;
  chapterName: string;
  pageNumber: number;
  categories: string[];
};

export type Note = {
  id: string;
  createdAt: Date;
} & CreateNotePayload;

export const createNote = (note: CreateNotePayload) => {
  // TODO Validate here

  return {
    ...note,
    id: generateID(20),
    createdAt: new Date(),
  };
};
