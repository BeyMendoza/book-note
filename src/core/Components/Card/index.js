import styled from '@emotion/styled';

import { withTheme } from '../../utils/withTheme';

const StyledCard = styled.div`
  padding: 1rem;
  border-radius: 6px;
  border: ${props => (props.outlined ? '1px solid' : 'none')};
  background-color: ${props => props.theme.palette.background.paper};
  border-color: ${props => (props.outlined ? props.theme.palette.divider : 'none')};
`;

// Props are passed manually for be explicit to show u how this works.

export const Card = withTheme(({ children, className, style, outlined = false, theme }) => {
  console.log(theme);
  return (
    <StyledCard style={style} theme={theme} outlined={outlined} className={className}>
      {children}
    </StyledCard>
  );
});
