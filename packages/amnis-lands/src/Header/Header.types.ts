import type { SectionProps } from '../Section';

export interface HeaderProps extends SectionProps {
  /**
   * Title of the header.
   */
  title: string;

  /**
   * Shorter title for responsiveness.
   */
  titleShort?: string;

  /**
   * Expand beyond the theme's max content width.
   * @default true
   */
  expand?: boolean;
}
