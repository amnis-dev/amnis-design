import type React from 'react';
import type { BoxProps } from '@amnis/layout/Box';

export interface InteractiveProps extends BoxProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * When set, the component indicates it's toggled value.
   */
  toggle?: boolean;

  /**
   * Disables interaction.
   */
  disabled?: boolean;

  /**
   * Set tab indexing.
   */
  tabIndex?: number;

  /**
   * Flag to render as a button.
   * @default false
   */
  button?: boolean;
}
