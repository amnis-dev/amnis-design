import type React from 'react';

export interface LinkProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Hyperlink
   */
  href: string;

  /**
   * Specify where to open the linked document
   */
  target?: '_blank' | '_self' | '_parent' | '_top';

  /**
   * indicate that this component links to an external website.
   */
  external?: boolean;

  /**
   * Allow's passing of the referrer header to the new page.
   */
  refer?: boolean;
}
