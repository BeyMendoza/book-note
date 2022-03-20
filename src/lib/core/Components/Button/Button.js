import _ from 'lodash';
import styled from '@emotion/styled';
import { fade } from '../../utils/fade';
import { withTheme } from '../../middlewares/withTheme';
import { useDynamicStyled } from '../../hooks/useDynamicStyled';

export const Button = withTheme(({ children, theme, ...props }) => {
  const styled = useDynamicStyled({ ...props, theme });
  const Button = _.get(variants, _.get(props, 'variant', 'contained'), variants.contained);
  const color = _.get(theme.palette, _.get(props, 'color', 'primary.main'), 'primary.main');
  return (
    <ButtonContainer color={color} theme={theme}>
      <Button {...props} {...styled} theme={theme} color={color}>
        {children}
      </Button>
    </ButtonContainer>
  );
});

const ButtonContainer = styled.div`
  & button {
    padding: 8px 10px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    background: transparent;
  }
`;

const StyledTextButton = styled.button`
  color: ${props => props.color} !important;
  &:hover {
    background: ${props => fade(props.color, 0.08)};
  }
`;

const StyledContainedButton = styled.button`
  color: ${props => props.theme.palette.common.white} !important;
  background: ${props => props.color} !important;
`;

const StyledOutlinedButton = styled.button`
  border: 1px solid !important;
  border-color: ${props => props.color} !important;
  color: ${props => props.color} !important;
  &:hover {
    background: ${props => fade(props.color, 0.08)};
  }
`;

const variants = {
  text: StyledTextButton,
  outlined: StyledOutlinedButton,
  contained: StyledContainedButton,
};
