import type { ThemePaintOptions } from '@amnis/style/theme.types';
import type React from 'react';
import type { EntryProps } from '../Entry/Entry.types';

export type ButtonVariant = 'text' | 'contain' | 'outline';

export interface ButtonProps extends Omit<EntryProps<never>, 'value' | 'refInner' | 'suggestions'> {
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
