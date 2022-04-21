---
to: <%= `packages/amnis-${type}/src/${Name}/${Name}.tsx` %>
---
import React from 'react';
import type { <%= Name %>Props } from './<%= Name %>.types';
<% if(styled) { -%>
<%- `import { ${Name}Styled } from './${Name}.styled';` %>
<% } -%>

/**
 * ## Subtitle
 * TODO: Write component details
 */
<% if(styled) { -%>
export const <%= Name %> = React.forwardRef<
HTMLDivElement,
React.ComponentProps<typeof <%= Name %>Styled>
& <%= Name %>Props
>(({
  children,
  ...props
}, ref) => (
<% } else { -%>
export const <%= Name %> = React.forwardRef<
HTMLDivElement,
<%= Name %>Props
>(({
  children,
}, ref) => (
<% } -%>
  <%- styled ? `<${Name}Styled ref={ref} {...props}>` : `<div ref={ref}>` %>
    {children}
  <%- styled ? `</${Name}Styled>` : `</div>` %>
));

export default <%= Name %>;
