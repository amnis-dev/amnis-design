import React from 'react';
import { ThemeContext, styledDefaultTheme } from '@amnis/style/styled';
import { Theme } from '@amnis/style/theme.types';
import { Stack } from '../Stack/Stack';
import { BoxStyled } from '../Box/Box.styled';
import type { FluidProps } from './Fluid.types';
import { LayoutContext, LayoutContextType } from '../LayoutContext';

/**
 * ## Responsive Layout
 * Fluids assist with designing adaptive layouts for consistent display on a variety of screen sizes
 * and devices.
 *
 * This system does use the common 12-column flexible grid, but uses a basis to determine column
 * widths.
 */
export const Fluid = React.forwardRef<
HTMLDivElement,
React.ComponentProps<typeof BoxStyled>
& FluidProps
>(({
  gap = 0,
  children,
  ...props
}, ref) => {
  let theme = React.useContext(ThemeContext) as Theme;
  if (theme && Object.keys(theme).length === 0) {
    theme = styledDefaultTheme;
  }

  const layoutContextValue: LayoutContextType = React.useMemo(() => ({
    gap: theme.spacing[gap],
  }), [gap]);

  return (
    <LayoutContext.Provider value={layoutContextValue}>
      <Stack ref={ref} flexWrap row gap={gap} {...props}>
        {children}
      </Stack>
    </LayoutContext.Provider>
  );
});

export default Fluid;
