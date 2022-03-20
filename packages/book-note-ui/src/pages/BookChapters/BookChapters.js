import { Card, Flexbox, Text, Button, withRouter } from 'book-ui-library';

const chapters = [
  {
    id: 1,
    name: 'Storybook testing',
  },
  {
    id: 2,
    name: 'Test-Driven Dev',
  },
  {
    id: 3,
    name: 'Webpack',
  },
];

const BookChapters = ({ navigate, location, ...props }) => {
  return (
    <div>
      <Text variant="subtitle1" style={{ margin: 0 }}>
        Book Chapters
      </Text>
      <br />
      {chapters.map((chapter, key) => {
        return (
          <Card key={key} style={{ marginBottom: '1rem' }}>
            <Flexbox justifyContent="space-between" alignItems="center">
              <div>
                <Text variant="h6" style={{ margin: 0 }}>
                  {chapter.name}
                </Text>
                <Text variant="body1" color="text.disabled" style={{ margin: 0 }}>
                  {chapter.name}
                </Text>
              </div>
              <Button
                variant="text"
                onClick={() => {
                  navigate(`${location.pathname}/chapter/${chapter.id}`);
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

export default withRouter(BookChapters);
