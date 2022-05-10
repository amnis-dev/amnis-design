import { ThemeBase } from './theme.types';
import themeGenerator from './themeGenerator';

const baseTheme: ThemeBase = {
  name: 'Amnis Light Theme',
};

export const themeLight = themeGenerator(baseTheme);

export default themeLight;
