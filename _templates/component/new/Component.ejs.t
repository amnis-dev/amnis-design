---
to: <%= `packages/amnis-${type}/src/${Name}/${Name}.tsx` %>
---
import React from 'react';
import { <%= Name %>Props } from './<%= Name %>.types';
<% if(styled) { -%>
<%- `import { ${Name}Styled } from './${Name}.styled';` %>
<% } -%>

/**
 * ## Subtitle
 * TODO: Write component details
 */
<% if(styled) { -%>
export const <%= Name %>: React.FC<
React.ComponentProps<typeof <%= Name %>Styled>
& <%= Name %>Props
> = ({
  refInner,
  ...props
}) => (
<% } else { -%>
export const <%= Name %>: React.FC<<%= Name %>Props> = () => (
<% } -%>
  <%- styled ? `<${Name}Styled ref={refInner} {...props}>` : `<div ref={refInner}>` %>
    <%= h.capitalize(type) %> Component
  <%- styled ? `</${Name}Styled>` : `</div>` %>
);

export default <%= Name %>;