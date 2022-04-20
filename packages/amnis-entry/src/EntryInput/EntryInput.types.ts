import type React from 'react';

export interface EntryInputProps {
  /**
   * Reference to the inner element.
   * @ignore
   */
  refInner?: React.RefObject<HTMLInputElement>;

  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;
}
