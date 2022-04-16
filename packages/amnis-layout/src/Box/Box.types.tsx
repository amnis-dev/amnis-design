import React from 'react';
import { ThemePaintOptions, ThemeSpacingLevelOptions } from '@amnis/style/theme.types';

/**
 * A simple container for other components.
 */
export interface BoxProps {

  /**
   * Color the box as one of the theme paint colors.
   * This will appropriately alter the colors of nested components.
   */
  paint?: ThemePaintOptions;

  /**
   * CSS Positioning.
   */
  position?: React.CSSProperties['position'];

  /**
   * Add the theme's amount of padding to the box.
   */
  padding?: ThemeSpacingLevelOptions;

  /**
   * Alias for `padding`.
   * @ignore
   */
  p?: ThemeSpacingLevelOptions;

  /**
   * Add the theme's amount of margin to the box.
   */
  margin?: ThemeSpacingLevelOptions;

  /**
   * Alias for `margin`.
   * @ignore
   */
  m?: ThemeSpacingLevelOptions;

  /**
   * Specify maximum width.
   */
  maxWidth?: React.CSSProperties['maxWidth'];

  /**
   * Specify minimum width.
   */
  minWidth?: React.CSSProperties['minWidth'];

  /**
   * Specify a width amount.
   */
  width?: React.CSSProperties['width'];

  /**
   * Alias for `width`.
   * @ignore
   */
  w?: React.CSSProperties['width'];

  /**
   * Specify maximum height.
   */
  maxHeight?: React.CSSProperties['maxHeight'];

  /**
   * Specify minimum height.
   */
  minHeight?: React.CSSProperties['minHeight'];

  /**
   * Specify a height amount.
   */
  height?: React.CSSProperties['height'];

  /**
   * Alias for `height`.
   * @ignore
   */
  h?: React.CSSProperties['height'];

  /**
   * Border styling.
   */
  border?: React.CSSProperties['border'];

  /**
   * Alias for `border`.
   * @ignore
   */
  b?: React.CSSProperties['border'];

  /**
   * Stretch to the witch of the container. Same as for width being equal to 100%.
   * @default false
   */
  stretch?: boolean;

  /**
   * Alignment of textual content.
   */
  textAlign?: React.CSSProperties['textAlign'];

  /**
   * A shortcut to applying a flex styling value.
   */
  flex?: number;

  /**
   * Determines how this component should align itself along siblings.
   */
  alignSelf?: React.CSSProperties['alignSelf'];

  /**
   * Determines how this component should justify itself along siblings.
   */
  justifySelf?: React.CSSProperties['justifySelf'];

  /**
   * Child elements
   */
  children?: React.ReactNode;
}
