import React from 'react';
import { ThemeSwapProvider } from '@amnis/style/ThemeSwapProvider';
import { InteractiveProps } from './Interactive.types';
import { InteractiveStyled } from './Interactive.styled';

/**
 * ## Focusable
 * Provides a focusable area that the user can interact with.
 */
export const Interactive = React.forwardRef<
HTMLButtonElement,
InteractiveProps
>(({
  children,
  toggle,
  outlined,
  paint,
  ...props
}, ref) => (
  <ThemeSwapProvider paint={!outlined ? paint : undefined}>
    <InteractiveStyled
      ref={ref}
      paint={paint}
      outlined={outlined}
      tabIndex={0}
      type="button"
      aria-pressed={toggle}
      toggle={toggle}
      {...props}
    >
      {children}
    </InteractiveStyled>
  </ThemeSwapProvider>
));

export default Interactive;
