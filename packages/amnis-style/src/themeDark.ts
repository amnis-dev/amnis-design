import { ThemeBase } from './theme.types';
import themeGenerator from './themeGenerator';

const baseTheme: ThemeBase = {
  name: 'Amnis Dark Theme',
  mode: 'dark',

  // backgroundColor: '#16181d',

  // primaryColor: '#abd7eb',
  // secondaryColor: '#fa8072',

  paints: {
    main: {
      backgroundColor: '#16181d',
      color: '#ffffff',
    },

    primary: {
      backgroundColor: '#abd7eb',
      color: '#151515',
    },
    secondary: {
      backgroundColor: '#fa8072',
      color: '#151515',
    },
    cool: {
      backgroundColor: '#00bde3',
      color: '#151515',
    },
    warm: {
      backgroundColor: '#fa9441',
      color: '#151515',
    },
    base: {
      backgroundColor: '#cfcfcf',
      color: '#151515',
    },
  },

  surfaces: {
    button: {
      boxShadow: '1px 1px 2px 0 #ffffff55',
    },
  },

};

export const themeDark = themeGenerator(baseTheme);

export default themeDark;
