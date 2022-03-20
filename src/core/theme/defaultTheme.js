const LightColorTones = {
  primary: {
    100: '#D6E4FF',
    200: '#ADC8FF',
    300: '#84A9FF',
    400: '#6690FF',
    500: '#3366FF',
    600: '#254EDB',
    700: '#1939B7',
    800: '#102693',
    900: '#091A7A',
  },
  success: {
    100: '#F5FDCF',
    200: '#E8FBA0',
    300: '#D5F470',
    400: '#BFEA4C',
    500: '#A1DD16',
    600: '#84BE10',
    700: '#699F0B',
    800: '#508007',
    900: '#3E6A04',
  },
  info: {
    100: '#D7FEF3',
    200: '#AFFDEF',
    300: '#87FBEF',
    400: '#38E8F4',
    500: '#38E8F4',
    600: '#28B9D1',
    700: '#1C8DAF',
    800: '#11668D',
    900: '#0A4A75',
  },
  warning: {
    100: '#FFF5D9',
    200: '#FFE9B3',
    300: '#FFDA8D',
    400: '#FFCB71',
    500: '#FFB342',
    600: '#DB8F30',
    700: '#B76E21',
    800: '#935115',
    900: '#7A3C0C',
  },
  error: {
    100: '#FFE5D6',
    200: '#FFC4AE',
    300: '#FF9C85',
    400: '#FF7667',
    500: '#FF3835',
    600: '#DB2633',
    700: '#B71A33',
    800: '#931030',
    900: '#7A0A2F',
  },
};

const DarkColorTones = {
  primary: {
    100: '#D6E4FF',
    200: '#ADC8FF',
    300: '#84A9FF',
    400: '#6690FF',
    500: '#3366FF',
    600: '#254EDB',
    700: '#1939B7',
    800: '#102693',
    900: '#091A7A',
  },
  success: {
    100: '#F5FDCF',
    200: '#E8FBA0',
    300: '#D5F470',
    400: '#BFEA4C',
    500: '#A1DD16',
    600: '#84BE10',
    700: '#699F0B',
    800: '#508007',
    900: '#3E6A04',
  },
  info: {
    100: '#D7FEF3',
    200: '#AFFDEF',
    300: '#87FBEF',
    400: '#38E8F4',
    500: '#38E8F4',
    600: '#28B9D1',
    700: '#1C8DAF',
    800: '#11668D',
    900: '#0A4A75',
  },
  warning: {
    100: '#FFF5D9',
    200: '#FFE9B3',
    300: '#FFDA8D',
    400: '#FFCB71',
    500: '#FFB342',
    600: '#DB8F30',
    700: '#B76E21',
    800: '#935115',
    900: '#7A3C0C',
  },
  error: {
    100: '#FFE5D6',
    200: '#FFC4AE',
    300: '#FF9C85',
    400: '#FF7667',
    500: '#FF3835',
    600: '#DB2633',
    700: '#B71A33',
    800: '#931030',
    900: '#7A0A2F',
  },
};

const common = {
  white: '#fff',
  black: '#000',
};

const grey = {
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
};

export const getLightPalette = (lightTone = 300, mainTone = 500, darkTone = 800) => ({
  mode: 'light',
  common,
  grey,
  background: {
    paper: '#FFF',
    default: '#F8F9FC',
  },
  text: {
    primary: '#212121',
    secondary: '#666666',
    disabled: '#9E9E9E',
  },
  divider: '#D6DEEE',
  primary: {
    light: LightColorTones.primary[lightTone],
    main: LightColorTones.primary[mainTone],
    dark: LightColorTones.primary[700],
  },
  success: {
    light: LightColorTones.success[lightTone],
    main: LightColorTones.success[mainTone],
    dark: LightColorTones.success[darkTone],
  },
  info: {
    light: LightColorTones.info[lightTone],
    main: LightColorTones.info[mainTone],
    dark: LightColorTones.info[darkTone],
  },
  warning: {
    light: LightColorTones.warning[lightTone],
    main: LightColorTones.warning[mainTone],
    dark: LightColorTones.warning[darkTone],
  },
  error: {
    light: LightColorTones.error[lightTone],
    main: LightColorTones.error[mainTone],
    dark: LightColorTones.error[darkTone],
  },
});

export const getDarkPalette = (lightTone = 300, mainTone = 500, darkTone = 800) => ({
  mode: 'dark',
  common,
  grey,
  background: {
    paper: '#222B45',
    default: '#151A30',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B8B8B8',
    disabled: '#898989',
  },
  divider: '#101426',
  primary: {
    light: DarkColorTones.primary[lightTone],
    main: DarkColorTones.primary[mainTone],
    dark: DarkColorTones.primary[darkTone],
  },
  success: {
    light: DarkColorTones.success[lightTone],
    main: DarkColorTones.success[mainTone],
    dark: DarkColorTones.success[darkTone],
  },
  info: {
    light: DarkColorTones.info[lightTone],
    main: DarkColorTones.info[mainTone],
    dark: DarkColorTones.info[darkTone],
  },
  warning: {
    light: DarkColorTones.warning[lightTone],
    main: DarkColorTones.warning[mainTone],
    dark: DarkColorTones.warning[darkTone],
  },
  error: {
    light: DarkColorTones.error[lightTone],
    main: DarkColorTones.error[mainTone],
    dark: DarkColorTones.error[darkTone],
  },
});

export const getTheme = (mode = 'light', lightTone = 300, mainTone = 500, darkTone = 800) => ({
  palette:
    mode === 'light' ? getLightPalette(lightTone, mainTone, darkTone) : getDarkPalette(lightTone, mainTone, darkTone),
});
