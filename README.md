# book-note

Applicacion para guardar, clasificar y acceder facilmente a las notas importantes de mis lecturas.

![Preview](./preview.png)

## Colaboration

There is a list of tasks to implement base on requirements. Let's pick up some task!

## Requirements

As a user I want to save my reading notes in an application, so that I can organizate them base on a given book and a given chapter. When I create a new note I want to save:

- The note itself
- The page number
- The chapter
- Creation Date
- And some categories

### Histories

---

#### Create Note History

**As a User**:

I want to create a book note, where I can save the note, page number, date, chapter and cero or categories.

**Preconditions**:

- It's no possible to save a note without any book.
- The note must be added to a selected book.

**PostConditions**:

- The created note must be listed once was created.

---

#### Edit Note History

**As a User**:

I want to edit a created not.

**Preconditions**:

- The note must exist.
- The note must be selected.

**PostConditions**:

- The Listed note must change.

---

#### Search Note

**As a User**:

I want search a note.

**Preconditions**:

- User enter an simple string

**PostConditions**:

- The List should display all matched notes


## TODO 

### FrontEnd

- [x] Create Component for creating note.
- [x] Create Note Card
- [ ] Create Searcher Component
- [x] Create Routes Structure
- [x] Create Notes Page
- [x] Create Chapters Page
- [x] Create WorkSpace Page
- [ ] Server Integration


### Backend

- [ ] Use Express
- [ ] Talk if is better to use no relational vs relational.
- [ ] Provide pattern for switch easely between no relational vs relational.
- [ ] Use Hexagonal Architecture Style
- [ ] Define Controllers
- [ ] Create Note use case
- [ ] List Notes use case
- [ ] Update Note use case
- [ ] Create Book use case
- [ ] Create Chapter use case