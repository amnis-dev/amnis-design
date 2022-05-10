/* eslint-disable @typescript-eslint/ban-ts-comment */
import type {
  Theme, ThemeColumnWidths, ThemePaint, ThemePaintOptions, ThemeShadowLevels,
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

/**
 * Creates the levels for shadows.
 */
export function createThemeShadowLevels(themeIsLightType: boolean): ThemeShadowLevels {
  const shadowColor = themeIsLightType ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.75)';

  return {
    0: 'none',
    1: `0 1px 4px 0 ${shadowColor}`,
    2: `0 4px 8px 0 ${shadowColor}`,
    3: `0 8px 16px 0 ${shadowColor}`,
    4: `0 12px 24px 0 ${shadowColor}`,
    5: `0 16px 32px 0 ${shadowColor}`,
    6: `0 18px 36px 0 ${shadowColor}`,
  };
}
