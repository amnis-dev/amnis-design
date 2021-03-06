import { ThemePaintOptions } from '@amnis/style/theme.types';
import type React from 'react';

export type FontVariant = 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4'
| 'heading-5' | 'heading-6' | 'subtitle-1' | 'subtitle-2' | 'body-1' | 'body-2'
| 'logo' | 'label' | 'button' | 'caption' | 'overline' | 'link';

export interface FontProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Paint color of the text.
   */
  paint?: ThemePaintOptions;

  /**
   * Override the text color.
   */
  color?: string;

  /**
   * The variant of the font typography.
   * @default "body1"
   */
  variant?: FontVariant;

  /**
   * Alias for `variant`.
   * @ignore
   */
  v?: FontVariant;

  /**
   * Overrides font size.
   * @default "1em"
   */
  size?: React.CSSProperties['fontSize'];

  /**
    * Alias for `size`.
    * @ignore
    */
  s?: React.CSSProperties['fontSize'];

  /**
   * Apply text decoration.
   */
  decoration?: React.CSSProperties['textDecoration'];

  /**
   * Option to render the component as a different HTML element.
   */
  as?: string;
}
