import React from 'react';
import { ThemeSwapProvider } from '@amnis/style/ThemeSwapProvider';
import { columnWidths } from '@amnis/style/themeUtil';
import type { BoxProps, BoxDepths } from './Box.types';
import { BoxStyled } from './Box.styled';
import { LayoutContext } from '../LayoutContext';

const boxDepths: BoxDepths = {
  background: -99,
  ground: 0,
  system: 99,
  overlay: 999,
};

/**
 * ## Standard Container
 * A standard container for nesting componets that offers properties for spacing and
 * alignment.
 *
 * This component is also useful for changing the context of theme paint colors to ensure
 * text and other backgrounds remain visible.
 */
export const Box = React.forwardRef<
HTMLDivElement,
React.ComponentProps<typeof BoxStyled>
& BoxProps
>(({
  children,
  paint,
  display,
  outlined = false,
  depth = 'ground',
  position,
  top,
  right,
  bottom,
  left,
  width,
  w,
  maxWidth,
  maxW,
  minWidth,
  minW,
  height,
  maxHeight,
  maxH,
  minHeight,
  minH,
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
  style = {},
  ...props
}, ref) => {
  const { gap } = React.useContext(LayoutContext);

  return (
    <ThemeSwapProvider paint={!outlined ? paint : undefined}>
      <BoxStyled
        ref={ref}
        style={{
          position,
          display,
          zIndex: boxDepths[depth],
          top,
          right,
          bottom,
          left,
          width: width || w || (stretch ? '100%' : undefined),
          maxWidth: maxWidth || maxW,
          minWidth: minWidth || minW,
          height: height || h,
          maxHeight: maxHeight || maxH,
          minHeight: minHeight || minH,
          border,
          justifySelf,
          alignSelf,
          flexGrow: basis || b || flex,
          flexBasis: (basis || b) ? `calc(${columnWidths[(basis || b)]} - ${gap}${typeof gap === 'number' ? 'px' : ''})` : 'auto',
          textAlign,
          ...style,
        }}
        paint={paint}
        outlined={outlined}
        padding={padding || p}
        margin={margin || m}
        {...props}
      >
        {children}
      </BoxStyled>
    </ThemeSwapProvider>
  );
});

export default Box;
