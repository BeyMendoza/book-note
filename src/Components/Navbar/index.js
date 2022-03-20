import { Card, Flexbox } from '../../core/Components';

export const Navbar = ({ children, ...props }) => {
  return (
    <Card
      style={theme => ({
        borderRadius: 0,
        width: '100%',
        padding: '1rem',
        position: 'sticky',
        top: 0,
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Flexbox justifyContent="space-between">{children}</Flexbox>
    </Card>
  );
};
