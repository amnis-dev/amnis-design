import React from 'react';
import { Fluid } from '../Fluid';
import { Box } from '../Box';
import type { EnumerProps } from './Enumer.types';

/**
 * ## Enumerable Components
 * Use this layout as apposed to Fluid when presenting a list of components related to each other.
 */
export const Enumer = React.forwardRef<
HTMLDivElement,
React.ComponentProps<typeof Fluid>
& EnumerProps
>(({
  children,
  ...props
}, ref) => (
  <Fluid
    ref={ref}
    as="ul"
    {...props}
  >
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return null;
      }
      const childComponent = child as React.ReactElement;
      const basis = childComponent.props?.basis ?? 12;
      return (
        <Box
          as="li"
          basis={basis}
        >
          {childComponent}
        </Box>
      );
    })}
  </Fluid>
));

export default Enumer;
