import { IconButton } from '../IconButton';
import { NavbarContainer } from '../NavbarContainer';
import { Text, withTheme, useTheme } from '@Library/core';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

export const Navbar = withTheme(({ theme, title }) => {
  const { switchMode } = useTheme();

  return (
    <NavbarContainer>
      <Text variant="body2" color="primary.main" style={{ margin: 0 }}>
        Title
      </Text>
      <Text variant="body2" style={{ margin: 0 }}>
        {title}
      </Text>
      <IconButton onClick={() => switchMode()}>
        {theme.palette.mode === 'dark' ? <IoSunnyOutline size={24} /> : <IoMoonOutline size={24} />}
      </IconButton>
    </NavbarContainer>
  );
});
