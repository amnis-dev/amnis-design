import { ThemeSeparatorOptions } from '@amnis/style/theme.types';

export interface DividerProps {
  /**
   * Theme variant.
   * @default "basic"
   */
  variant?: ThemeSeparatorOptions;

  /**
   * Divider will be slightly lighter
   * @default false
   */
  light?: boolean;
}
