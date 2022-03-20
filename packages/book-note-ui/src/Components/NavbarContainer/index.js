import { Card, Flexbox } from 'book-ui-library';

export const NavbarContainer = ({ children }) => {
  return (
    <Card
      style={theme => ({
        zIndex: 2,
        top: 0,
        borderRadius: 0,
        width: '100%',
        padding: '1rem',
        position: 'sticky',
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Flexbox justifyContent="space-between" alignItems="center">
        {children}
      </Flexbox>
    </Card>
  );
};
