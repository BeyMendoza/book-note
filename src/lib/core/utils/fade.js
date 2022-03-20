function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error(
      process.env.NODE_ENV !== 'production'
        ? 'Material-UI: Unsupported `'.concat(
            color,
            '` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().',
          )
        : (0, _utils.formatMuiErrorMessage)(3, color),
    );
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values,
  };
}

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = ''.concat(values[1], '%');
    values[2] = ''.concat(values[2], '%');
  }

  return ''.concat(type, '(').concat(values.join(', '), ')');
}

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (process.env.NODE_ENV !== 'production') {
    if (value < min || value > max) {
      console.error(
        'Material-UI: The value provided '.concat(value, ' is out of range [').concat(min, ', ').concat(max, '].'),
      );
    }
  }

  return Math.min(Math.max(min, value), max);
}

function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp('.{1,'.concat(color.length >= 6 ? 2 : 1, '}'), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors
    ? 'rgb'.concat(colors.length === 4 ? 'a' : '', '(').concat(
        colors
          .map(function (n, index) {
            return index < 3 ? parseInt(n, 16) : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;
          })
          .join(', '),
        ')',
      )
    : '';
}

export function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
