import React from 'react';
import useChildrenText from '@amnis/hooks/useChildrenText';
import { FontProps, FontVariant } from './Font.types';
import { FontStyled } from './Font.styled';

const variantElementMap: Record<FontVariant, string> = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'heading-4': 'h4',
  'heading-5': 'h5',
  'heading-6': 'h6',
  'subtitle-1': 'h2',
  'subtitle-2': 'h2',
  'body-1': 'p',
  'body-2': 'p',
  logo: 'h1',
  label: 'label',
  button: 'span',
  caption: 'caption',
  overline: 'span',
  link: 'a',
};

/**
 * ## Typography
 * Component that uses the theme's design to present content.
 */
export const Font = React.forwardRef<
HTMLElement,
React.ComponentProps<typeof FontStyled>
& FontProps
>(({
  children,
  variant,
  v,
  color,
  size,
  s,
  as,
  style,
  ...props
}, ref) => (
  <FontStyled
    ref={ref}
    as={as || variantElementMap[(variant || v || 'body-1') as FontVariant]}
    variant={variant || v}
    style={{ fontSize: size || s, color, ...style }}
    {...props}
  >
    {children}
  </FontStyled>
));

export default Font;
