export interface SkeletonProps {
  /**
   * Variant of the skeleton.
   * @default "text"
   */
  variant?: 'text' | 'rectangle' | 'circle';

  /**
   * Character buffer to expand the skeleton to.
   * Only works with the text variant.
   * @default 0
   */
  buffer?: number;

  /**
   * Width of the skeleton.
   */
  width?: number;

  /**
   * Height of the skeleton.
   */
  height?: number;

  /**
   * Removes any existing border radius
   * @default false
   */
  sharp?: boolean;
}
