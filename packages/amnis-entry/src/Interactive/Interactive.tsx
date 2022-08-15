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
  as,
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
      type={(button && !as) ? 'button' : undefined}
      as={as || (button ? 'button' : undefined)}
      aria-pressed={toggle}
      button={button}
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
