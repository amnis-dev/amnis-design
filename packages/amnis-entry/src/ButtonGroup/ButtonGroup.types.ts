import type React from 'react';
import type { IconName } from '@amnis/icons/Icon/Icon.types';
import type { ThemePaintOptions } from '@amnis/style/theme.types';
import type { Interactive } from '../Interactive';

export type ButtonGroupSize = 'small' | 'medium' | 'large';

/**
 * An object that defines an item within a button group.
 */
export interface ButtonGroupItem extends React.ComponentProps<typeof Interactive> {
  label: string;
  icon?: IconName;
}

/**
 * A group of buttons.
 */
export interface ButtonGroupProps {

  /**
   * Theme paint color of the button group.
   */
  paint?: ThemePaintOptions;

  /**
   * List of button item definitions.
   */
  buttons: ButtonGroupItem[];

  /**
   * Item stacking direction
   * @default "row"
   */
  direction?: 'row' | 'column';

  /**
   * Disable entire button group.
   * @default false
   */
  disabled?: boolean;

  /**
   * Applies an outlined style.
   */
  outlined?: boolean;

  /**
   * Size of the button group.
   */
  size?: ButtonGroupSize;
}
