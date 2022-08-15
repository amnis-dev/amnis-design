import type React from 'react';
import { BoxProps } from '../Box';

export interface ItemProps extends BoxProps {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;
}
