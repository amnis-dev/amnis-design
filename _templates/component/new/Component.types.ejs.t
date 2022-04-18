---
to: <%= `packages/amnis-${type}/src/${Name}/${Name}.types.ts` %>
---
import type React from 'react';

export interface <%= Name %>Props {
  /**
   * Reference to the inner element.
   * @ignore
   */
  refInner?: React.RefObject<HTMLDivElement>;

  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode
}
