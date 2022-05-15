import React from 'react';
import { Icon } from '@amnis/icons/index';
import { ThemeSpacingLevelOptions } from '@amnis/style/theme.types';
import { LoaderSpin } from '@amnis/display/LoaderSpin';
import type { ButtonIconProps } from './ButtonIcon.types';
import { Interactive, InteractiveProps } from '../Interactive';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const ButtonIcon = React.forwardRef<
HTMLButtonElement,
Omit<React.ComponentProps<typeof Interactive>, 'size'>
& ButtonIconProps
>(({
  paint,
  label,
  variant = 'contain',
  icon = 'IoAdd',
  size = 'medium',
  disabled,
  loading = false,
  ...props
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

  const sizeProps = React.useMemo<{
    fontSize: string;
    padding: ThemeSpacingLevelOptions;
    height: string;
  }>(() => {
    switch (size) {
      case 'small':
        return {
          fontSize: '0.9em',
          padding: 2,
          height: '1.5em',
        };
      case 'large':
        return {
          fontSize: '2.5em',
          padding: 4,
          height: '3.65em',
        };
      case 'medium':
      default:
        return {
          fontSize: '1.75em',
          padding: 3,
          height: '2.4em',
        };
    }
  }, [size]);

  return (
    <Interactive
      ref={ref}
      button
      aria-label={label}
      disabled={disabled}
      sx={({ spacing }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: spacing[sizeProps.padding],
        paddingRight: spacing[sizeProps.padding],
        width: sizeProps.height,
        height: sizeProps.height,
      })}
      {...interactiveVariantProps}
      {...props}
    >
      {loading ? (
        <LoaderSpin size="inherit" />
      ) : (
        <Icon name={icon} size={sizeProps.fontSize} style={{ position: 'absolute' }} />
      )}
    </Interactive>
  );
});

export default ButtonIcon;
