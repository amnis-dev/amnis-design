import React from 'react';
import type { TooltipProps } from './Tooltip.types';
import { TooltipStyled } from './Tooltip.styled';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const Tooltip = React.forwardRef<
HTMLDivElement,
React.ComponentProps<typeof TooltipStyled>
& TooltipProps
>(({
  children,
  title,
  arrow = false,
}, ref) => (
  <TooltipStyled ref={ref} title={title} arrow={arrow}>
    {children}
  </TooltipStyled>
));

export default Tooltip;
