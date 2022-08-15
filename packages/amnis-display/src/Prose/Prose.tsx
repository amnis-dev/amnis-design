import React from 'react';
import type { ProseProps } from './Prose.types';
import { ProseStyled } from './Prose.styled';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const Prose = React.forwardRef<
HTMLDivElement,
React.ComponentProps<typeof ProseStyled>
& ProseProps
>(({
  children,
  ...props
}, ref) => (
  <ProseStyled ref={ref} {...props}>
    {children}
  </ProseStyled>
));

export default Prose;
