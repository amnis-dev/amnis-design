export type ImageLayout = 'intrinsic' | 'responsive' | 'contain' | 'cover';

export interface ImageProps {
  /**
   * Source of the image content
   */
  src: string;

  /**
   * Alternative text that describes the image for screen readers. This is required.
   */
  alt: string;

  /**
   * Sets the width of the image.
   */
  width: number;

  /**
   * Sets the height of the image.
   */
  height: number;

  /**
   * Layout mode
   * @default "intrinsic"
   */
  layout?: ImageLayout;

  /**
   * Loading option
   */
  loading?: 'lazy';
}
