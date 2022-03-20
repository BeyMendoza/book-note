import _ from 'lodash';

export const useResolveStyles = (style, theme) => {
  if (!style) return {};
  if (_.isFunction(style)) return style(theme);
  return style;
};
