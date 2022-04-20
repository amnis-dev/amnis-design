import { BaseTheme } from './theme.types';
import themeGenerator from './themeGenerator';

const baseTheme: BaseTheme = {
  name: 'Amnis Light Theme',

  backgroundColor: '#ffffff',
};

export const themeLight = themeGenerator(baseTheme);

export default themeLight;
