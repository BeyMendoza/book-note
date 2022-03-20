import _ from 'lodash';
import styled from '@emotion/styled';
import { withTheme } from '../../lib/core/middlewares/withTheme';

const StyledDiv = styled.div`
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  border-radius: ${props => props.shape};
  background-color: ${props => props.theme.palette.grey[300]};
`;

const shapes = {
  rounded: '10px',
  circle: '50%',
};

export const Avatar = withTheme(({ size = 5, theme, children, ...props }) => {
  const shape = _.get(props, 'shape', 'circle');
  return (
    <StyledDiv size={size} shape={shapes[shape]} theme={theme}>
      {children}
    </StyledDiv>
  );
});
