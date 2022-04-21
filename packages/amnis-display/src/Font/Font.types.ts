import { ThemePaintOptions } from '@amnis/style/theme.types';
import type React from 'react';

export type FontVariant = 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4'
| 'heading-5' | 'heading-6' | 'subtitle-1' | 'subtitle-2' | 'body-1' | 'body-2'
| 'logo' | 'label' | 'button' | 'caption' | 'overline';

export interface FontProps {
  /**
   * Reference to the inner element.
   * @ignore
   */
  refInner?: React.RefObject<HTMLDivElement>;

  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Paint color of the text.
   */
  paint?: ThemePaintOptions;

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
   * Apply text decoration.
   */
  decoration?: React.CSSProperties['textDecoration'];

  /**
   * Option to render the component as a different HTML element.
   */
  as?: string;
}
