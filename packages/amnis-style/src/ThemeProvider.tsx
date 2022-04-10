/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { ThemeProvider as StyledProvider } from '@emotion/react';
import { Theme } from './theme.types';
import { GlobalStyles } from './ThemeGlobal';

export interface ThemeProviderProps {
  theme: Theme;
  root?: boolean;
  skipGlobal?: boolean;
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
    <StyledProvider theme={theme}>
      {root && !skipGlobal && <GlobalStyles root={root} />}
      {children}
    </StyledProvider>
  );
};

export default ThemeProvider;
