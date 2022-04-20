import React from 'react';
import { Icon } from '@amnis/icons/Icon';
import { Font } from '@amnis/display/Font';
import { ButtonProps } from './Button.types';
import { Interactive } from '../Interactive';

/**
 * # Click Input
 * A simple button for user interaction.
 */
export const Button: React.FC<ButtonProps> = ({
  refInner,
  children,
  paint,
}) => (
  <Interactive
    refInner={refInner}
    paint={paint}
    surface="button"
    minWidth="2.5em"
    padding={3}
  >
    <Font variant="button">{children || ' '}</Font>
  </Interactive>
);

export default Button;
