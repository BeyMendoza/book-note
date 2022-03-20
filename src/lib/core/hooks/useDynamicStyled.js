import _ from 'lodash';
import { css } from '@emotion/css';
import { useResolveClass } from './useResolveClass';
import { useResolveStyles } from './useResolveStyles';

export const useDynamicStyled = ({ theme, ...props }) => {
  const classes = useResolveClass(_.get(props, 'className'), theme);
  const _style = useResolveStyles(_.get(props, 'style'), theme);

  return {
    className: css`
      ${classes}
    `,
    style: _style,
  };
};
