import type React from 'react';
import type { BoxProps } from '@amnis/layout/Box';
import type { ThemeSurfaceOptions } from '@amnis/style/theme.types';

export interface InteractiveProps extends Omit<BoxProps, 'refInner'> {
  /**
   * Reference to the inner element.
   * @ignore
   */
  refInner?: React.RefObject<HTMLButtonElement>;

  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Sets the type of surface style.
   */
  surface?: ThemeSurfaceOptions;

  /**
   * When set, the component indicates it's toggled value.
   */
  toggle?: boolean;
}
