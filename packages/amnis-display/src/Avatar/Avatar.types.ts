import type React from 'react';
import type { ThemeShapeOptions } from '@amnis/style/theme.types';

export interface AvatarProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Avatar size.
   */
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'massive';

  /**
   * Avatar's label (typically a username).
   */
  label: string;

  /**
   * Option image source.
   */
  image?: string;

  /**
   * Shape
   * @default "circle"
   */
  shape?: ThemeShapeOptions;

  /**
   * Set the background color.
   */
  bgColor?: string;
}
