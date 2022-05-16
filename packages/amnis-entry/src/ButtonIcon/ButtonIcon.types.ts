import type React from 'react';
import type { IconName } from '@amnis/icons/Icon/Icon.types';
import type { ThemePaintOptions } from '@amnis/style/theme.types';
import type { InteractiveProps } from '../Interactive/Interactive.types';

export type ButtonIconVariant = 'text' | 'contain' | 'outline';
export type ButtonIconSize = 'small' | 'medium' | 'large';

export interface ButtonIconProps extends InteractiveProps {
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
   * Paint color for the button.
   */
  paint?: ThemePaintOptions;

  /**
   * Style variant.
   * @default "contain"
   */
  variant?: ButtonIconVariant;

  /**
   * Button sizes
   * @default "medium"
   */
  size?: ButtonIconSize;

  /**
   * Flag to indicate a loading state.
   * @default false
   */
  loading?: boolean;
}
