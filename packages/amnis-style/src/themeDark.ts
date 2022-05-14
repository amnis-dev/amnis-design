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
    paper: {
      backgroundColor: '#262d3d',
      boxShadow: '0 1px 4px 0 rgba(255, 255, 255, 0.4)',
    },
    overlay: {
      backgroundColor: '#88888888',
    },
  },

  shadow: {
    0: 'none',
    1: '0 1px 4px 0 rgba(255, 255, 255, 0.4)',
    2: '0 4px 8px 0 rgba(255, 255, 255, 0.4)',
    3: '0 8px 16px 0 rgba(255, 255, 255, 0.4)',
    4: '0 12px 24px 0 rgba(255, 255, 255, 0.4)',
    5: '0 16px 32px 0 rgba(255, 255, 255, 0.4)',
    6: '0 18px 36px 0 rgba(255, 255, 255, 0.4)',
  },

};

export const themeDark = themeGenerator(baseTheme);

export default themeDark;
