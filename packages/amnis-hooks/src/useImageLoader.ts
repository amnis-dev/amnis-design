import React from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

export interface UseImageLoaderOutput {
  completed: boolean;
  successful: boolean;
  errored: boolean;
}

/**
 * Hook description.
 */
export function useImageLoader(
  ref: React.RefObject<HTMLImageElement>,
  src: string,
): UseImageLoaderOutput {
  /**
   * Image object.
   */
  const [image] = React.useState(new Image());

  /**
   * If the image load attempt completed.
   */
  const [completed, completedSet] = React.useState(false);

  /**
   * If the image load was successful.
   */
  const [successful, successfulSet] = React.useState(false);

  /**
   * If an error occured during the image load.
   */
  const [errored, erroredSet] = React.useState(false);

  /**
   * Intersection observer to tell us when the image comes into view.
   */
  const intersectionObserver = useIntersectionObserver(ref, { freezeOnceVisible: true });
  const imageVisible = !!intersectionObserver?.isIntersecting;

  /**
   * Effect to trigger when the image is visible in the user's viewport.
   */
  React.useEffect(() => {
    if (image && imageVisible) {
      image.onload = () => {
        completedSet(true);
        successfulSet(true);
      };
      image.onerror = () => {
        completedSet(true);
        erroredSet(true);
      };
      image.src = src;
    }
  }, [image, imageVisible]);

  return { completed, successful, errored };
}

export default useImageLoader;
