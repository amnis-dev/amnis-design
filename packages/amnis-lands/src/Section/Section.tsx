import React from 'react';
import { Box } from '@amnis/layout/Box';
import type { Theme, ThemeSpacingLevelOptions } from '@amnis/style/theme.types';
import type { CSSObject } from '@amnis/style/styled';
import type { SectionProps } from './Section.types';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const Section = React.forwardRef<
HTMLDivElement,
SectionProps
>(({
  children,
  as = 'section',
  expand,
  padding,
  p,
  ...props
}, ref) => {
  const pad = React.useMemo<ThemeSpacingLevelOptions>(() => padding || p || 0, [padding, p]);

  const sxMethod = React.useCallback((theme: Theme): CSSObject => {
    const { spacing, maxContentWidth } = theme;

    return expand ? {} : {
      padding: `${spacing[pad]} max(calc(${spacing[pad]} * 0.4), calc((100% - (${maxContentWidth} - ${spacing[pad]})) / 2))`,
    };
  }, [expand, pad]);

  return (
    <Box
      ref={ref}
      as={as}
      width="100%"
      minHeight="1em"
      sx={sxMethod}
      padding={expand ? padding : undefined}
      {...props}
    >
      {children}
    </Box>
  );
});

export default Section;
