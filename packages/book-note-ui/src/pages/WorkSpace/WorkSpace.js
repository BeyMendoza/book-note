import { Card, Text, Flexbox, Button, withRouter } from 'book-ui-library';

const books = [
  {
    id: 1,
    isbn: '',
    name: 'React Native For Dummies',
  },
  {
    id: 2,
    isbn: '',
    name: 'Microservices Patterns',
  },
];

const WorkSpace = ({ navigate, location, ...props }) => {
  return (
    <div>
      <Text variant="subtitle1" style={{ margin: 0 }}>
        My Books
      </Text>
      <br />
      {books.map((book, key) => {
        return (
          <Card key={key} style={{ marginBottom: '1rem' }}>
            <Flexbox justifyContent="space-between" alignItems="center">
              <div>
                <Text variant="h6" style={{ margin: 0 }}>
                  {book.name}
                </Text>
                <Text variant="body1" color="text.disabled" style={{ margin: 0 }}>
                  {book.name}
                </Text>
              </div>
              <Button
                variant="text"
                onClick={() => {
                  navigate(`/book/${book.id}`);
                }}
              >
                Check
              </Button>
            </Flexbox>
          </Card>
        );
      })}
    </div>
  );
};

export default withRouter(WorkSpace);
