import type React from 'react';

export interface EntryLabelsProps {
  /**
   * Reference to the inner element.
   * @ignore
   */
  refInner?: React.RefObject<HTMLDivElement>;

  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;
}
