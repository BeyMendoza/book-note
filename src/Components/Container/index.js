import styled from '@emotion/styled';
import { withTheme } from './../../lib/core/middlewares/withTheme';

const StyledContainer = styled.div(({ mq }) => ({
  margin: 'auto',
  [mq[0]]: {
    width: '100%',
  },
  [mq[1]]: {
    width: '90%',
  },
  [mq[2]]: {
    width: '80%',
  },
  [mq[3]]: {
    width: '70%',
  },
  [mq[4]]: {
    width: '60%',
  },
}));

export const Container = withTheme(({ children, theme, ...props }) => {
  return <StyledContainer mq={theme.mediaQueries}>{children}</StyledContainer>;
});
