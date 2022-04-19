import { BaseTheme } from './theme.types';
import themeGenerator from './themeGenerator';

const baseTheme: BaseTheme = {
  name: 'Amnis Dark Theme',

  fontFamily: 'Public Sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
  fontSize: '1.06rem',

  fontFamilyLogo: 'Public Sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
  fontSizeLogo: '1.06rem',

  backgroundColor: '#ffffff',

  infoColor: '#00bde3',
  warnColor: '#ffbe2e',
  dangerColor: '#b50909',
  positiveColor: '#00a91c',

  primaryColor: '#345494',
  secondaryColor: '#f53148',
  coolColor: '#9aebfc',
  warmColor: '#ffdc2e',
  baseColor: '#c8c8c8',

};

export const themeDark = themeGenerator(baseTheme);

export default themeDark;
