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
  height = 50,
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
          height,
        };
      case 'text':
      default:
        return {};
    }
  }, [variant, width]);

  return (
    <SkeletonStyled
      ref={ref}
      variant={variant}
      style={{
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
