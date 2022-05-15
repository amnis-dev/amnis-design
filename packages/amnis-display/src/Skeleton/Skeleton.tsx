import React from 'react';
import type { SkeletonProps } from './Skeleton.types';
import { SkeletonStyled } from './Skeleton.styled';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const Skeleton = React.forwardRef<
HTMLDivElement,
React.ComponentProps<typeof SkeletonStyled>
& SkeletonProps
>(({
  variant,
  buffer = 0,
  width = 50,
  height,
  sharp = false,
  style,
  ...props
}, ref) => {
  const skeletonStyle = React.useMemo(() => {
    switch (variant) {
      case 'circle':
        return {
          width,
        };
      case 'rectangle':
        return {
          width,
          height: height || width,
        };
      case 'text':
      default:
        return {};
    }
  }, [variant, width, height]);

  return (
    <SkeletonStyled
      ref={ref}
      variant={variant}
      style={{
        borderRadius: sharp ? 0 : undefined,
        ...skeletonStyle,
        ...style,
      }}
      {...props}
    >
      {'X'.repeat(buffer)}
    </SkeletonStyled>
  );
});

export default Skeleton;
