/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled, { CSSObject } from '@amnis/style/styled';
import { ThemeSpacingLevelOptions } from '@amnis/style/theme.types';
import type { BoxProps } from './Box.types';

export const BoxStyled = styled<HTMLDivElement>('div')<Partial<BoxProps>>(({
  theme,
  paint,
  outlined = false,
  shadow,
  padding = 0,
  margin = 0,
  display = 'block',
  direction,
  row,
  gap = 0,
  flexWrap = false,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  surface,
  shape = 'square',
}) => {
  const {
    paints, spacing, shadow: themeShadow, surfaces, shapes,
  } = theme;

  const isPainted = !!paint;
  const flexDirection = direction || row ? 'row' : 'column';

  const paddingVertical = (padding > 1 ? padding - 1 : padding) as ThemeSpacingLevelOptions;
  const marginVertical = (margin > 1 ? margin - 1 : margin) as ThemeSpacingLevelOptions;

  let style: CSSObject = {
    flexGrow: 0,
    flexShrink: 1,
    lineHeight: 1,
    backgroundColor: isPainted ? paints.main.backgroundColor : undefined,
    color: isPainted ? paints.main.color : 'inherit',
    padding: `${spacing[paddingVertical]} ${spacing[padding]}`,
    margin: `${spacing[marginVertical]} ${spacing[margin]}`,
    display,
    boxSizing: 'border-box',
    flexDirection,
    gap: spacing[gap],
    flexWrap: flexWrap ? 'wrap' : 'nowrap',
    alignItems,
    justifyContent,
  };

  if (surface) {
    style = {
      ...style,
      ...paints.main,
      ...surfaces[surface].base as Record<string, unknown>,
    };
  }

  if (shape) {
    style = {
      ...style,
      ...shapes[shape],
    };
  }

  if (outlined) {
    style = {
      ...style,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: paint ? paints[paint || 'main'].backgroundColor : paints.main.color,
      color: paint ? paints[paint].backgroundColor : paints.main.color,
      backgroundColor: paint ? `${paints[paint].color} !important` : 'transparent',
    };
  }

  if (shadow) {
    style = { ...style, boxShadow: themeShadow[shadow] };
  }

  return style;
});

export default BoxStyled;
