/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Theme, ThemePaint, ThemePaintOptions } from './theme.types';

/**
 * Swaps two theme paints and returns the new theme.
 */
export const swapPaint = (
  theme: Theme,
  paint1: ThemePaintOptions,
  paint2: ThemePaintOptions,
): Theme => {
  if (!theme) { return theme; }

  const returnTheme: Theme = { ...theme, paints: { ...theme.paints } };

  /** @ts-ignore */
  returnTheme.paints[paint1] = theme.paints[paint2];
  /** @ts-ignore */
  returnTheme.paints[paint2] = theme.paints[paint1];

  return returnTheme;
};

/**
 * Gets a paint by a string value of paint options.
 */
export function getPaint(theme: Theme, paintOption: ThemePaintOptions): ThemePaint {
  return theme.paints[paintOption];
}
