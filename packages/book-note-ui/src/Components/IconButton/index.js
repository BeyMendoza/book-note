import styled from '@emotion/styled';
import { fade, withTheme } from 'book-ui-library';

const StyledButton = styled.button`
  padding: 5px;
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  border-radius: 10rem;
  justify-content: center;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  color: ${props => props.theme.palette.text.primary};
  background: ${props => fade(props.theme.palette.primary.main, 0)};
  &:hover {
    background: ${props => fade(props.theme.palette.primary.main, 0.05)};
  }
`;

export const IconButton = withTheme(props => <StyledButton {...props} />);
