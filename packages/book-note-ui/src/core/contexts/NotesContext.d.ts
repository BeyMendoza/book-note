import React = require('react');
import { CreateNotePayload, Note } from '../Note';

export interface NotesContext {
  notes: Note[];
  addNote: (node: CreateNotePayload) => void;
}

interface NotesContextProviderProps {
  children: React.ReactNode;
}
export function NotesContextProvider(props: NotesContextProviderProps): JSX.Element;

export function useNotes(): NotesContext;
