import React from 'react';
import { ThemeSwapProvider } from '@amnis/style/ThemeSwapProvider';
import { BoxProps } from './Box.types';
import { BoxStyled } from './Box.styled';

/**
 * ## Standard Container
 * A standard container for nesting componets that offers properties for spacing and
 * alignment.
 *
 * This component is also useful for changing the context of theme paint colors to ensure
 * text and other backgrounds remain visible.
 */
export const Box: React.FC<
React.ComponentProps<typeof BoxStyled>
& BoxProps
> = ({
  paint,
  position,
  width,
  w,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  h,
  padding,
  p,
  margin,
  m,
  border,
  b,
  flex,
  justifySelf,
  alignSelf,
  children,
  ...props
}) => (
  <ThemeSwapProvider paint={paint}>
    <BoxStyled
      style={{
        position,
        width: width || w,
        maxWidth,
        minWidth,
        height: height || h,
        maxHeight,
        minHeight,
        border: border || b,
        justifySelf,
        alignSelf,
        flex,
      }}
      paint={paint}
      padding={padding || p}
      margin={margin || m}
      {...props}
    >
      {children}
    </BoxStyled>
  </ThemeSwapProvider>
);

export default Box;
