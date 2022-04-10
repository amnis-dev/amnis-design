import type { ReactNode } from 'react';
import type { ThemePaintOptions } from '@amnis/style/theme.types';
import type { IconName } from '@amnis/icons/Icon.types';

export type ButtonTypes = 'button' | 'submit';
export type ButtonVariants = 'filled' | 'outlined' | 'unstyled' | 'icon';
export type ButtonSizes = 'small' | 'normal' | 'big';

/**
 * A simple button that invokes some action.
 */
export interface ButtonType {
  /**
   * Button contents
   */
  label?: string;
  /**
   * Theme paint colors
   * @default "primary"
   */
  paint?: ThemePaintOptions;
  /**
   * Set the variant styling of the button.
   * @default "filled"
   */
  variant?: ButtonVariants;
  /**
   * Size options for the button
   * @default "normal"
   */
  size?: ButtonSizes;
  /**
   * Sets an icon for the button.
   */
  icon?: IconName;
  /**
   * Determines if the button should be disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Type of button element
   * @default "button"
   */
  type?: ButtonTypes;
  /**
   * Child elements
   */
  children?: ReactNode;
  /**
   * Apply loading state to the button.
   * @default false
   */
  loading?: boolean;
}
