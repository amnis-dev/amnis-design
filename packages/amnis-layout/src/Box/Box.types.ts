import type React from 'react';
import type {
  ThemePaintOptions,
  ThemeSpacingLevelOptions,
  ThemeColumnWidthOptions,
  ThemeSurfaceOptions,
  ThemeShapeOptions,
  ThemeShadowLevelOptions,
} from '@amnis/style/theme.types';

/**
 * A simple container for other components.
 */
export interface BoxProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Color the box as one of the theme paint colors.
   * This will appropriately alter the colors of nested components.
   */
  paint?: ThemePaintOptions;

  /**
   * Outlines the surface with the set paint color.
   * @default false
   */
  outlined?: boolean;

  /**
   * Apply a level of shadow to the layout.
   */
  shadow?: ThemeShadowLevelOptions;

  /**
   * Applies a suface styling to the box.
   */
  surface?: ThemeSurfaceOptions;

  /**
   * Changes the shape of the box.
   */
  shape?: ThemeShapeOptions;

  /**
   * CSS Positioning.
   */
  position?: React.CSSProperties['position'];

  /**
   * CSS Display.
   */
  display?: React.CSSProperties['display'];

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
   * Alias for `maxWidth`.
   * @ignore
   */
  maxW?: React.CSSProperties['maxWidth'];

  /**
   * Specify minimum width.
   */
  minWidth?: React.CSSProperties['minWidth'];

  /**
   * Alias for `minWidth`.
   * @ignore
   */
  minW?: React.CSSProperties['minWidth'];

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
   * Alias for `maxHeight`.
   * @ignore
   */
  maxH?: React.CSSProperties['maxHeight'];

  /**
   * Specify minimum height.
   */
  minHeight?: React.CSSProperties['minHeight'];

  /**
   * Alias for `minHeight`.
   * @ignore
   */
  minH?: React.CSSProperties['minHeight'];

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
   * Item stacking direction
   * @default "column"
   */
  direction?: 'row' | 'column'

  /**
   * Shorthand for `direction="row"`
   */
  row?: boolean;

  /**
   * Shorthand for `direction="column"`
   */
  column?: boolean;

  /**
   * Allow flex items to flow onto a new line.
   */
  flexWrap?: boolean;

  /**
   * Gap spacing level between items.
   */
  gap?: ThemeSpacingLevelOptions;

  /**
   * Alignment of the items.
   * @default "flex-start"
   */
  alignItems?: React.CSSProperties['alignItems'];

  /**
   * Justification of the content.
   * @default "flex-start"
   */
  justifyContent?: React.CSSProperties['justifyContent'];

  /**
   * A basis level on when to wrap.
   */
  basis?: ThemeColumnWidthOptions;

  /**
   * Alias for `basis`.
   * @ignore
   */
  b?: ThemeColumnWidthOptions;
}
