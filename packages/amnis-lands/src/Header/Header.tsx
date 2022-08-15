import React from 'react';
import { useMediaQuery } from '@amnis/hooks/useMediaQuery';
import { Font } from '@amnis/display/Font';
import type { HeaderProps } from './Header.types';
import { Section } from '../Section';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const Header = React.forwardRef<
HTMLDivElement,
HeaderProps
>(({
  paint = 'primary',
  title = 'Untitled Page',
  titleShort,
  padding = 7,
  expand = true,
  ...props
}, ref) => {
  const mobile = useMediaQuery('(max-width: 768px)');

  return (
    <Section
      ref={ref}
      as="header"
      paint={paint}
      padding={padding}
      expand={expand}
      {...props}
    >
      <Font variant="heading-1">{mobile ? (titleShort || title) : title}</Font>
    </Section>
  );
});

export default Header;
