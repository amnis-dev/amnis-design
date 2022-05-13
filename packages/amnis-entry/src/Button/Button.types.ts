import { IconName } from '@amnis/icons/Icon.types';
import type { ThemePaintOptions } from '@amnis/style/theme.types';
import type React from 'react';

export type ButtonVariant = 'text' | 'contain' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Optional label
   */
  label?: string;

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
  variant?: ButtonVariant;

  /**
   * Button sizes
   * @default "medium"
   */
  size?: ButtonSize;

  /**
   * Icon key for the start icon.
   */
  iconStart?: IconName;

  /**
   * Key for the end icon.
   */
  iconEnd?: IconName;

  /**
   * Flag to indicate a loading state.
   * @default false
   */
  loading?: boolean;
}
