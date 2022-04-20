import { BaseTheme } from './theme.types';
import themeGenerator from './themeGenerator';

const baseTheme: BaseTheme = {
  name: 'Amnis Dark Theme',

  backgroundColor: '#16181d',

};

export const themeDark = themeGenerator(baseTheme);

export default themeDark;
