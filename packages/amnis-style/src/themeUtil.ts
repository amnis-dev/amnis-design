/* eslint-disable @typescript-eslint/ban-ts-comment */
import type {
  Theme, ThemeColumnWidths, ThemePaint, ThemePaintOptions,
} from './theme.types';

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

export const columnWidths: ThemeColumnWidths = {
  0: 'auto',
  1: `${(1 / 12) * 100}%`,
  2: `${(2 / 12) * 100}%`,
  3: `${(3 / 12) * 100}%`,
  4: `${(4 / 12) * 100}%`,
  5: `${(5 / 12) * 100}%`,
  6: `${(6 / 12) * 100}%`,
  7: `${(7 / 12) * 100}%`,
  8: `${(8 / 12) * 100}%`,
  9: `${(9 / 12) * 100}%`,
  10: `${(10 / 12) * 100}%`,
  11: `${(11 / 12) * 100}%`,
  12: `${(12 / 12) * 100}%`,
};
