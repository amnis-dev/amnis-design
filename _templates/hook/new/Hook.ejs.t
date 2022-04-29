---
to: <%= `packages/amnis-hooks/src/${name}.ts` %>
---
import React from 'react';

/**
 * Hook description.
 */
export function <%= name %>(): boolean {
  const [value] = React.useState(true);

  return value;
}

export default <%= name %>;
