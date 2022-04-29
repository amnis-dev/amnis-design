import { ImageProps } from '../Image/Image.types';

export interface PictureProps extends ImageProps {
  /**
   * Custom placeholder image.
   */
  placeholder?: string;
}
