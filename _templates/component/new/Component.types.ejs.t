---
to: <%= `packages/amnis-${type}/src/${Name}/${Name}.types.ts` %>
---
import type React from 'react';

export interface <%= Name %>Props {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;
}
