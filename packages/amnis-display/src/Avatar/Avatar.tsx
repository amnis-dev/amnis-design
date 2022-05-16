import React from 'react';
import { Box } from '@amnis/layout/Box';
import { useStringColor } from '@amnis/hooks/useStringColor';
import { Image } from '../Image';
import { Font } from '../Font';
import type { AvatarProps } from './Avatar.types';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const Avatar = React.forwardRef<
HTMLDivElement,
AvatarProps
>(({
  children,
  label,
  size,
  image,
  shape = 'circle',
  bgColor,
}, ref) => {
  const avatarColor = useStringColor(label);

  const avatarSize = React.useMemo(() => {
    switch (size) {
      case 'tiny': return '1.5em';
      case 'small': return '2.4em';
      case 'medium': return '3.65em';
      case 'large': return '5.5em';
      case 'huge': return '8.75em';
      case 'massive': return '15em';
      default: return '3.65em';
    }
  }, [size]);

  const childComponent = React.useMemo(() => {
    if (React.Children.count(children) > 0) {
      return children;
    }
    if (image) {
      return (
        <Image
          alt={`${label} avatar`}
          src={image}
          width={50}
          height={50}
          layout="cover"
          loading="lazy"
        />
      );
    }
    return (
      <Font
        size={`calc(${avatarSize} * 0.7)`}
        color="#ffffff"
        style={{
          textShadow: '-1px -1px 0 #333,1px -1px 0 #333,-1px 1px 0 #666,1px 1px 0 #666',
        }}
      >
        {label.charAt(0)}
      </Font>
    );
  }, [children, image, label]);

  return (
    <Box
      ref={ref}
      display="inline-flex"
      shape={shape}
      width={avatarSize}
      height={avatarSize}
      alignItems="center"
      justifyContent="center"
      style={{
        backgroundColor: bgColor ?? avatarColor,
        textTransform: 'capitalize',
      }}
    >
      {childComponent}
    </Box>
  );
});

export default Avatar;
