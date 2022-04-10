import { BaseTheme } from './theme.types';
import themeGenerator from './themeGenerator';

const baseTheme: BaseTheme = {
  name: 'Amnis Default Theme',

  fontFamily: 'Public Sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
  fontSize: '1.06rem',

  fontFamilyLogo: 'Public Sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
  fontSizeLogo: '1.06rem',

  backgroundColor: '#ffffff',

  infoColor: '#00bde3',
  warnColor: '#ffbe2e',
  dangerColor: '#b50909',
  positiveColor: '#00a91c',

  primaryColor: '#005ea2',
  secondaryColor: '#c9342e',
  coolColor: '#00bde3',
  warmColor: '#fa9441',
  baseColor: '#cfcfcf',

};

export default themeGenerator(baseTheme);
