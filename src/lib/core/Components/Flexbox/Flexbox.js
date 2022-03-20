import _ from 'lodash';
import React from 'react';
import { extractSpacing } from '../../utils/spacingResolver';

export const Flexbox = props => {
  const { children, className } = props;

  let spacing = {};
  if (!_.has(props, 'noSpacing')) spacing = extractSpacing(props);

  const justifyContent = _.get(props, 'justifyContent', 'flex-start');
  const alignItems = _.get(props, 'alignItems', 'flex-start');
  const direction = _.get(props, 'direction', 'row');
  const flexWrap = _.get(props, 'flexWrap', 'wrap');
  const style = _.get(props, 'style', {});
  const gap = _.get(props, 'gap', {});

  return (
    <div
      style={{
        flexWrap,
        alignItems,
        justifyContent,
        gap: `${gap}rem`,
        display: 'flex',
        flexDirection: direction,
        ...spacing,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
