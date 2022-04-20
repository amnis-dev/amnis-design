import type { ThemePaintOptions } from '@amnis/style/theme.types';
import type React from 'react';

export type ButtonVariant = 'text' | 'contained' | 'outlined';

export interface ButtonProps {
  /**
   * Reference to the inner element.
   * @ignore
   */
  refInner?: React.RefObject<HTMLButtonElement>;

  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Paint color for the button.
   * @default "primary"
   */
  paint?: ThemePaintOptions;

  /**
   * Style variant.
   * @default "contained"
   */
  variant?: ButtonVariant;
}
