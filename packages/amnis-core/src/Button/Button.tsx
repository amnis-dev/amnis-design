import React, { ComponentProps } from 'react';
import { ThemeSwapProvider } from '@amnis/style/ThemeSwapProvider';
import { Icon } from '@amnis/icons/Icon';
import { ButtonType } from './Button.types';
import { ButtonStyled } from './Button.styled';
// import { LoaderEllipses } from '../loaderellipses/LoaderEllipses';

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef<
HTMLButtonElement,
ComponentProps<typeof ButtonStyled> &
ButtonType
>(({
  label,
  paint = 'primary',
  variant = 'filled',
  size = 'normal',
  disabled = false,
  type = 'button',
  icon = 'IoInformationCircleSharp',
  onClick,
  children,
  ...props
}, ref) => (
  <ThemeSwapProvider paint={paint}>
    <ButtonStyled
      type={type}
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      ref={ref}
      {...props}
    >
      {variant === 'icon' ? <Icon name={icon} /> : (label || children)}
    </ButtonStyled>
  </ThemeSwapProvider>
));

export default Button;
