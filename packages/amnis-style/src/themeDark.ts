import { BaseTheme } from './theme.types';
import themeGenerator from './themeGenerator';

const baseTheme: BaseTheme = {
  name: 'Amnis Dark Theme',

  backgroundColor: '#16181d',

  primaryColor: '#abd7eb',
  secondaryColor: '#fa8072',

  surfaces: {
    button: {
      boxShadow: '1px 1px 2px 0 #ffffff55',
    },
  },

};

export const themeDark = themeGenerator(baseTheme);

export default themeDark;
