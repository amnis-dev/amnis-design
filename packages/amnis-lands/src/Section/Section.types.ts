import type React from 'react';
import type { BoxProps } from '@amnis/layout/Box/Box.types';

export interface SectionProps extends BoxProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Render as another element.
   * @ignore
   */
  as?: string;

  /**
   * Expand beyond the theme's max content width.
   * @default false
   */
  expand?: boolean;
}
