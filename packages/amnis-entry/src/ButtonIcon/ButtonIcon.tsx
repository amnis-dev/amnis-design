import React from 'react';
import { Icon } from '@amnis/icons/index';
import { ThemeSpacingLevelOptions } from '@amnis/style/theme.types';
import type { ButtonIconProps } from './ButtonIcon.types';
import { Interactive, InteractiveProps } from '../Interactive';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const ButtonIcon = React.forwardRef<
HTMLButtonElement,
ButtonIconProps
>(({
  paint,
  label,
  variant = 'contain',
  icon = 'IoAdd',
  size = 'medium',
  disabled,
}, ref) => {
  const interactiveVariantProps: InteractiveProps = React.useMemo(() => {
    switch (variant) {
      case 'text':
        return {
          shape: 'circle',
        };
      case 'outline':
        return {
          paint,
          surface: 'button',
          shape: 'circle',
          outlined: true,
        };
      case 'contain':
      default:
        return {
          paint,
          surface: 'button',
          shape: 'circle',
        };
    }
  }, [variant, paint]);

  const sizeProps = React.useMemo<{ fontSize: string, padding: number }>(() => {
    switch (size) {
      case 'small':
        return {
          fontSize: '0.9em',
          padding: 1,
        };
      case 'large':
        return {
          fontSize: '2.5em',
          padding: 2,
        };
      case 'medium':
      default:
        return {
          fontSize: '1.75em',
          padding: 1,
        };
    }
  }, [size]);

  return (
    <Interactive
      ref={ref}
      aria-label={label}
      disabled={disabled}
      padding={sizeProps.padding as ThemeSpacingLevelOptions}
      {...interactiveVariantProps}
    >
      <Icon name={icon} size={sizeProps.fontSize} />
    </Interactive>
  );
});

export default ButtonIcon;
