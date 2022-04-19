/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { ThemeContext } from './styled';
import { Theme } from './theme.types';
import { GlobalStyles } from './ThemeGlobal';

export interface ThemeProviderProps {
  theme: Theme;
  root?: boolean;
  skipGlobal?: boolean;
  /**
   * Explicitly declare allowable children.
   */
  children?: React.ReactNode
}

/**
 * Theme provider for the component library.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  root = false,
  skipGlobal = false,
  children,
}) => {
  if (root) {
    /** @ts-ignore */
    theme._root = { ...theme };
  }

  return (
    <ThemeContext.Provider value={theme}>
      {root && !skipGlobal && <GlobalStyles root={root} />}
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
