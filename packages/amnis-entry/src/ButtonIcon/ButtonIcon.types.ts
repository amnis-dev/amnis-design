import type React from 'react';
import { IconName } from '@amnis/icons/Icon.types';
import type { ThemePaintOptions } from '@amnis/style/theme.types';

export type ButtonIconVariant = 'text' | 'contain' | 'outline';
export type ButtonIconSize = 'small' | 'medium' | 'large';

export interface ButtonIconProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Labling of the button action.
   */
  label: string;

  /**
   * Name of the icon to display.
   */
  icon: IconName;

  /**
   * Disables button interaction.
   */
  disabled?: boolean;

  /**
   * Paint color for the button.
   * @default "primary"
   */
  paint?: ThemePaintOptions;

  /**
   * Style variant.
   * @default "contained"
   */
  variant?: ButtonIconVariant;

  /**
   * Button sizes
   * @default "medium"
   */
  size?: ButtonIconSize;
}
