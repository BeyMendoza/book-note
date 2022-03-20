import _ from 'lodash';

const bootstrapSpacingSystem = {
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
};

/**
 * Search for any bootstrap style spacing prop
 * to extract it as a valid `React.CssProperty`.
 *
 * @param {*} props
 * @see https://getbootstrap.com/docs/4.0/utilities/spacing/
 *
 * @example
 *
 * <div style={...extractBoostrapSpacing(props)}></>
 */
export const extractSpacing = props => {
  let spacing = {};
  for (const key of _.keys(bootstrapSpacingSystem)) {
    const val = _.get(props, key);
    if (val) spacing[bootstrapSpacingSystem[key]] = val;
  }
  return spacing;
};
