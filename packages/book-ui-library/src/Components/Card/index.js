import styled from '@emotion/styled';
import { withTheme } from '../../middlewares/withTheme';
import { useDynamicStyled } from '../../hooks/useDynamicStyled';

const StyledCard = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  border-radius: ${props => (props.theme.screen === 'xs' ? '0px' : '6px')};
  border: ${props => (props.variant === 'outlined' ? '1px solid' : 'unset')};
  background-color: ${props => (props.bg ? props.bg : props.theme.palette.background.paper)};
  border-left: ${props => (props.theme.screen === 'xs' ? 'none' : props.variant === 'outlined' ? '1px solid' : 'none')};
  border-right: ${props =>
    props.theme.screen === 'xs' ? 'none' : props.variant === 'outlined' ? '1px solid' : 'none'};
  border-color: ${props =>
    props.variant === 'outlined' ? (props.borderColor ? props.borderColor : props.theme.palette.divider) : 'unset'};
`;

export const Card = withTheme(({ children, variant = 'normal', theme, ...props }) => {
  const styled = useDynamicStyled({ ...props, theme });
  const bg = _.get(theme.palette, _.get(props, 'bg', 'background.paper'));
  const color = _.get(theme.palette, _.get(props, 'borderColor', 'divider'));

  return (
    <StyledCard {...props} {...styled} bg={bg} theme={theme} variant={variant} borderColor={color}>
      {children}
    </StyledCard>
  );
});
