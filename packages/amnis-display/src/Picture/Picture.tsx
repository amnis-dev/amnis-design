import React from 'react';
import { useImageLoader } from '@amnis/hooks/useImageLoader';
import { Box } from '@amnis/layout/Box';
import { Stack } from '@amnis/layout/Stack';
import type { PictureProps } from './Picture.types';
import { PictureStyled } from './Picture.styled';
import { dataUrlPlaceholder } from './Picture.dataurls';
import { Font } from '../Font';
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
  children,
  placeholder = dataUrlPlaceholder,
  src,
  alt,
  width,
  height,
  title,
  description,
  layout,
  bar = 'bottom',
  style,
  ...props
}, ref) => {
  const imageRef = React.useRef(null);
  const { successful, observed } = useImageLoader(imageRef, src);

  const hasChildren = React.Children.count(children) > 0;

  const lazySrc = React.useMemo(() => {
    if (successful) {
      return src;
    }

    return observed ? placeholder : dataUrlPlaceholder;
  }, [successful, observed]);

  return (
    <Box
      position="relative"
      display="inline-block"
      style={{
        lineHeight: 0,
      }}
    >
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
          layout={layout}
          style={{
            filter: successful ? undefined : 'blur(1.5em)',
            ...style,
          }}
        />
      </PictureStyled>
      {(title || description || hasChildren) ? (
        <Stack
          position={bar === 'below' ? 'relative' : 'absolute'}
          direction="row"
          bottom={0}
          padding={3}
          gap={1}
          width="100%"
          surface={bar === 'below' ? undefined : 'overlay'}
          style={{
            fontSize: '0.9em',
          }}
        >
          {(title || description) ? (
            <Stack
              flex={1}
              gap={1}
            >
              {title && <Font><strong>{title}</strong></Font>}
              {description && <Font variant="body-2">{description}</Font>}
            </Stack>
          ) : null}
          {hasChildren && (
            <Box>
              {children}
            </Box>
          )}
        </Stack>
      ) : null}
    </Box>
  );
});

export default Picture;
