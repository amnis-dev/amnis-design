---
to: packages/amnis-core/src/<%= Name %>/<%= Name %>.tsx
---
import React, { ComponentProps } from 'react';
import { <%= Name %>Props } from './<%= Name %>.types';
import { <%= Name %>Styled } from './<%= Name %>.styled';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const <%= Name %>: React.FC<
ComponentProps<typeof <%= Name %>Styled>
& <%= Name %>Props
> = ({
  ...props
}) => (
  <<%= Name %>Styled {...props}>
    <%= h.capitalize(type) %> Component
  </<%= Name %>Styled>
);

export default <%= Name %>;
