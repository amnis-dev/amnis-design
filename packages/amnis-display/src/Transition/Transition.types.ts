import type { BoxProps } from '@amnis/layout/Box/Box.types';
import type { ThemeDurationOptions, ThemeTimingOptions } from '@amnis/style/theme.types';
import type React from 'react';

export type TransitionVariant = 'fade' | 'scale' | 'scaleHalf' | 'scaleQuarter' | 'spin' | 'spinHalf' | 'spinQuarter';

export interface TransitionProps extends BoxProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Duration time.
   * @default "normal"
   */
  duration?: ThemeDurationOptions;

  /**
   * Timing function.
   * @default "easeInOut"
   */
  timing?: ThemeTimingOptions;

  /**
   * Transition variants to use.
   * @default []
   */
  variants?: Array<TransitionVariant>;

  /**
   * Styling for an inactive transition.
   */
  styleInactive?: React.CSSProperties;

  /**
   * Styling for an active transition.
   */
  styleActive?: React.CSSProperties;

  /**
   * Determines if the transition should be activated.
   * @default false
   */
  active?: boolean;
}
