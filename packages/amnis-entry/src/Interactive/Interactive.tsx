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
React.ComponentProps<typeof InteractiveStyled>
& InteractiveProps
>(({
  children,
  toggle,
  disabled,
  outlined,
  button = false,
  tabIndex,
  paint,
  style,
  ...props
}, ref) => (
  <ThemeSwapProvider paint={!outlined ? paint : undefined}>
    <InteractiveStyled
      ref={ref}
      paint={paint}
      outlined={outlined}
      tabIndex={tabIndex ?? (button ? 0 : -1)}
      type={button ? 'button' : undefined}
      as={button ? 'button' : undefined}
      aria-pressed={toggle}
      toggle={toggle}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        ...style,
      }}
      {...props}
    >
      {children}
    </InteractiveStyled>
  </ThemeSwapProvider>
));

export default Interactive;
