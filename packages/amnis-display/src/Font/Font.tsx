import React from 'react';
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
};

/**
 * ## Typography
 * Component that uses the theme's design to present content.
 */
export const Font: React.FC<
React.ComponentProps<typeof FontStyled>
& FontProps
> = ({
  refInner,
  children,
  variant,
  v,
  as,
  ...props
}) => (
  <FontStyled
    ref={refInner}
    as={as || variantElementMap[(variant || v || 'body-1') as FontVariant]}
    variant={variant || v}
    {...props}
  >
    {children}
  </FontStyled>
);

export default Font;
