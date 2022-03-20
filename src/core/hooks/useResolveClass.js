import _ from 'lodash';

export const useResolveClass = (className, theme) => {
  if (!className) return '';
  if (_.isFunction(className)) return className(theme);
  return className;
};
