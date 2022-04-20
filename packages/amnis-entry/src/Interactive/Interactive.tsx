import React from 'react';
import { Box } from '@amnis/layout/Box';
import { InteractiveProps } from './Interactive.types';
import { InteractiveStyled } from './Interactive.styled';

/**
 * ## Focusable
 * Provides a focusable area that the user can interact with.
 */
export const Interactive: React.FC<
InteractiveProps
> = ({
  refInner,
  children,
  toggle,
  surface,
  ...props
}) => (
  <InteractiveStyled
    ref={refInner}
    tabIndex={0}
    type="button"
    aria-pressed={toggle}
    toggle={toggle}
    surface={surface}
  >
    <Box surface={surface} {...props}>
      {children}
    </Box>
  </InteractiveStyled>
);

export default Interactive;
