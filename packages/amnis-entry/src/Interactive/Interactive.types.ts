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
}
