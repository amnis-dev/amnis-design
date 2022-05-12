import type React from 'react';

export interface OverlayProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * If the overlay is opened.
   * @default false
   */
  open?: boolean;

  /**
   * Toggles a film background.
   * @default false
   */
  background?: boolean;

  /**
   * Alias for `background`
   * @ignore
   */
  bg?: boolean;
}
