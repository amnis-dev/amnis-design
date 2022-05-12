import type React from 'react';
import type { OverlayProps } from '../Overlay/Overlay.types';

export interface ModalProps extends OverlayProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Displayed title of the modal.
   */
  title: string;

  /**
   * Displayed description of the modal.
   */
  description: string;

  /**
   * Standard sizes for the modal.
   */
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge';

  /**
   * Label for the button that closes the dialog.
   * onClose is triggered when clicked.
   */
  closeLabel?: string;

  /**
   * Label for con the dialog.
   * onConfirm is triggered when clicked.
   */
  confirmLabel?: string;

  /**
   * Close callback.
   */
  onClose?: () => void;

  /**
   * Confirm callback.
   */
  onConfirm?: () => void;
}
