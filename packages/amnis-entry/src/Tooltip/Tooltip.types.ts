import { ThemePaintOptions } from '@amnis/style/theme.types';
import type React from 'react';

export interface TooltipProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;
  /**
   * Required title
   */
  title: string;
  /**
   * Optional Arrow
   */
  arrow?: boolean;
  /**
   * Optional color
   */
  paint?: ThemePaintOptions;

}
