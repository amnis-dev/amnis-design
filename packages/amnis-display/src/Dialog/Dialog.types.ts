import type { BoxProps } from '@amnis/layout/Box/Box.types';
import type { ThemePaintOptions } from '@amnis/style/theme.types';
import type React from 'react';

type AlignmentHorizontal = 'left' | 'center' | 'right';
type AlignmentVertical = 'top' | 'center' | 'bottom';

export interface OriginAlignment {
  horizontal: AlignmentHorizontal;
  vertical: AlignmentVertical;
}

/**
 * Callback when mouse is clicked away from the dialog and its anchor.
 */
export type DialogClickAwayCallback = () => void;

export interface DialogProps extends BoxProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Paint styling.
   * @default "main"
   */
  paint?: ThemePaintOptions;

  /**
   * A label naming this dialog is required for accessibility.
   */
  label: string;

  /**
   * Determines if the dialog should be opened/shown.
   * @default false
   */
  open?: boolean;

  /**
   * Set the anchor element
   * @ignore
   */
  anchor?: React.RefObject<HTMLElement>;

  /**
   * Alignment of the anchor's origin.
   */
  anchorOrigin?: OriginAlignment;

  /**
   * Alignment of the dialog's origin.
   */
  dialogOrigin?: OriginAlignment;

  /**
   * Standard sizes for the dialog.
   */
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';

  /**
   * Click Away event.
   * @ignore
   */
  onClickAway?: DialogClickAwayCallback;
}
