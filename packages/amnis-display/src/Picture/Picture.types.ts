import type { ImageProps } from '../Image/Image.types';

export interface PictureProps extends ImageProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Custom placeholder image.
   */
  placeholder?: string;

  /**
   * Optional title for the image.
   */
  title?: string;

  /**
   * Optional description for the image.
   */
  description?: string;

  /**
   * Bar variants.
   * @default "bottom"
   */
  bar?: 'bottom' | 'below';
}
