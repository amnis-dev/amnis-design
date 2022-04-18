/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-underscore-dangle */
import React, { useMemo } from 'react';
import { useTheme, ThemeProvider } from '@emotion/react';
import { ThemePaintOptions, Theme } from './theme.types';
import * as ThemeUtil from './themeUtil';
import defaultTheme from './themeLight';

export interface ThemeSwapProviderProps {
  /**
   * Color the box as one of the theme variant colors.
   * This will automatically alter the colors of nexted components.
   */
  paint?: ThemePaintOptions;

  /**
   * Explicitly declare allowable children.
   */
  children?: React.ReactNode
}

/**
 * ### Swaps Color Schemes
 * Swaps the colors in the theme based on the variant. This is so child components are always
 * visible.
 */
export const ThemeSwapProvider: React.FC<ThemeSwapProviderProps> = ({
  paint,
  children,
}) => {
  let theme: Theme = useTheme();
  if (!theme || Object.keys(theme).length === 0) {
    theme = defaultTheme;
    /** @ts-ignore */
    theme._root = { ...defaultTheme };
  }

  const overideTheme: Theme = useMemo(() => {
    if (!paint) {
      return theme;
    }
    if (paint === 'main') {
      /** @ts-ignore */
      return theme._root || theme;
    }

    const swappedPaints = ThemeUtil.swapPaint(theme, 'main', paint);

    return swappedPaints;
  }, [theme, paint]);

  return (
    <ThemeProvider theme={overideTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeSwapProvider;
