import React from 'react';
import { Box } from '../Box';
import type { ItemProps } from './Item.types';

/**
 * ## Enumerable Item
 * A special component to be used within enumerable components such as Lists.
 */
export const Item = React.forwardRef<
HTMLDivElement,
ItemProps
>(({
  children,
  ...props
}, ref) => (
  <Box
    ref={ref}
    as="li"
    {...props}
  >
    {children}
  </Box>
));

export default Item;
