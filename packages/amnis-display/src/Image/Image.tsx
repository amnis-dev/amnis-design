import React from 'react';
import type { ImageProps } from './Image.types';
import { ImageStyled } from './Image.styled';

/**
 * ## Imagery Display
 * A basic image with layout customizations.
 */
export const Image = React.forwardRef<
HTMLImageElement,
React.ComponentProps<typeof ImageStyled>
& ImageProps
>(({
  src,
  alt,
  width,
  height,
  layout = 'intrinsic',
  style,
  ...props
}, ref) => {
  /**
   * Compiled the height and widths for the styling.
   */
  const layoutStyle = React.useMemo<React.CSSProperties>(() => {
    switch (layout) {
      case 'responsive':
        return ({
          width: '100%',
          height: '100%',
          maxWidth: width,
          maxHeight: height,
        });
      case 'contain':
        return ({
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        });
      case 'cover':
        return ({
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        });
      case 'intrinsic':
      default:
        return ({
          width,
          height,
        });
    }
  }, [width, height, layout]);

  return (
    <ImageStyled
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        ...layoutStyle,
        ...style,
      }}
      {...props}
    />
  );
});

export default Image;
