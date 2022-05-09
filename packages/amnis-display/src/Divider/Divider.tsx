import React from 'react';
import type { DividerProps } from './Divider.types';
import { DividerStyled } from './Divider.styled';

/**
 * ## Separation
 * A component to represent a separation of content in paragraphs.
 */
export const Divider = React.forwardRef<
HTMLHRElement,
React.ComponentProps<typeof DividerStyled>
& DividerProps
>(({
  ...props
}, ref) => (
  <DividerStyled ref={ref} {...props} />
));

export default Divider;
