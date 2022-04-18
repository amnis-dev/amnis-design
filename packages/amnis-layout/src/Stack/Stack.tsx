import React from 'react';
import { Box } from '../Box/Box';
import { BoxStyled } from '../Box/Box.styled';
import { StackProps } from './Stack.types';

/**
 * ## Stacking Items
 * A convenient layout component to stack children horizontally or vertically.
 */
export const Stack: React.FC<
React.ComponentProps<typeof BoxStyled>
& StackProps
> = ({
  children,
  ...props
}) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
);

export default Stack;
