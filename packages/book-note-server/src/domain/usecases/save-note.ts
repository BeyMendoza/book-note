export interface SaveNote {
  save: (note: SaveNote.NoteDTO) => Promise<void>;
}

namespace SaveNote {
  export type NoteDTO = {
    content: string;
    chaperId: number;
    bookId: number;
    pageNumber: number;
    categories: string[];
  };

  export type CreatedNote = {
    id: string;
    createdAt: Date;
  } & NoteDTO;
}
