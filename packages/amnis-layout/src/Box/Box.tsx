import React from 'react';
import { ThemeSwapProvider } from '@amnis/style/ThemeSwapProvider';
import { columnWidths } from '@amnis/style/themeUtil';
import { BoxProps } from './Box.types';
import { BoxStyled } from './Box.styled';
import { LayoutContext } from '../LayoutContext';

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
  flex,
  justifySelf,
  alignSelf,
  stretch,
  textAlign,
  basis = 0,
  b = 0,
  children,
  refInner,
  style = {},
  ...props
}) => {
  const { gap } = React.useContext(LayoutContext);

  return (
    <ThemeSwapProvider paint={paint}>
      <BoxStyled
        ref={refInner}
        style={{
          position,
          width: width || w || stretch ? '100%' : undefined,
          maxWidth,
          minWidth,
          height: height || h,
          maxHeight,
          minHeight,
          border,
          justifySelf,
          alignSelf,
          flex,
          flexGrow: basis || b || 1,
          flexBasis: (basis || b) ? `calc(${columnWidths[(basis || b)]} - ${gap}${typeof gap === 'number' ? 'px' : ''})` : 'auto',
          textAlign,
          ...style,
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
};

export default Box;