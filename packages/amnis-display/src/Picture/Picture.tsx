import React from 'react';
import useImageLoader from '@amnis/hooks/useImageLoader';
import type { PictureProps } from './Picture.types';
import { PictureStyled } from './Picture.styled';
import { dataUrlPlaceholder } from './Picture.dataurls';
import { Image } from '../Image';

/**
 * ## Smart Imagery
 * A component that uses the Image component, but adds lazy loading, loaders, media queries.
 * This component should be used in most cases to accomidate screens and data plans of various types
 * to ensure an image is loaded for the given situation.
 */
export const Picture = React.forwardRef<
HTMLPictureElement,
React.ComponentProps<typeof PictureStyled>
& PictureProps
>(({
  placeholder = dataUrlPlaceholder,
  src,
  alt,
  width,
  height,
  style,
  ...props
}, ref) => {
  const imageRef = React.useRef(null);
  const { successful, observed } = useImageLoader(imageRef, src);

  const lazySrc = React.useMemo(() => {
    if (successful) {
      return src;
    }

    return observed ? placeholder : dataUrlPlaceholder;
  }, [successful, observed]);

  return (
    <PictureStyled
      ref={ref}
      {...props}
    >
      <Image
        ref={imageRef}
        src={lazySrc}
        alt={alt}
        height={height}
        width={width}
        style={{
          filter: successful ? undefined : 'blur(1.5em)',
          ...style,
        }}
      />
    </PictureStyled>
  );
});

export default Picture;
