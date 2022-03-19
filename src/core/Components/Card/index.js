import styled from '@emotion/styled';

import { withTheme } from '../../utils/withTheme';

const StyledCard = styled.div`
  padding: 1rem;
  border-radius: 6px;
  border: ${props => (props.variant === 'outlined' ? '1px solid' : 'unset')};
  background-color: ${props => (props.bg ? props.bg : props.theme.palette.background.paper)};
  border-color: ${props =>
    props.variant === 'outlined' ? (props.borderColor ? props.borderColor : props.theme.palette.divider) : 'unset'};
`;

// Props are passed manually for be explicit to show u how this works.

export const Card = withTheme(({ children, variant = 'normal', theme, ...props }) => {
  const color = _.get(theme.palette, _.get(props, 'color', 'divider'));
  const bg = _.get(theme.palette, _.get(props, 'bg', 'background.paper'));

  console.log(variant);
  return (
    <StyledCard {...props} theme={theme} borderColor={color} variant={variant} bg={bg}>
      {children}
    </StyledCard>
  );
});
