import styled, { CSSObject } from '@amnis/style/styled';
import type { Theme, ThemeFontOptions } from '@amnis/style/theme.types';
import type { FontProps } from './Font.types';

export const FontStyled = styled<HTMLSpanElement>('span')<Partial<FontProps>>(({
  theme,
  paint,
  variant = 'body-1',
  decoration = 'initial',
}) => {
  const { fonts, paints } = theme as Theme;
  const [fontType, fontLevelString] = variant.split('-') as [ThemeFontOptions, string];
  const fontProps = fonts.main[fontType] as CSSObject;
  const fontLevel = fontLevelString ? parseInt(fontLevelString, 10) - 1 : 0;

  const fontSize = `calc(${fontProps.fontSize} - ${fontProps.fontSize} / 7 * ${fontLevel})`;

  let style: CSSObject = {
    ...fonts.main[fontType] as CSSObject,
    display: 'inline',
    fontSize,
    textDecoration: decoration,
    color: paint ? paints[paint].backgroundColor : 'inherit',
    margin: 0,
    padding: 0,
    border: 'none',
  };

  if (paint) {
    style = {
      ...style,
      backgroundColor: paints[paint].color,
    };
  }

  return style;
});

export default FontStyled;
