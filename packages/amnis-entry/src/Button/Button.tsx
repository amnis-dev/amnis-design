import React from 'react';
import { Icon } from '@amnis/icons/Icon';
import { Font, FontProps } from '@amnis/display/Font';
import { Stack } from '@amnis/layout/Stack';
import { useChildrenText } from '@amnis/hooks/useChildrenText';
import type { ButtonProps } from './Button.types';
import { Interactive, InteractiveProps } from '../Interactive';

/**
 * ## Click Input
 * A simple button for user interaction.
 */
export const Button = React.forwardRef<
HTMLButtonElement,
ButtonProps
>(({
  children,
  paint,
  label,
  variant = 'contain',
  iconStart,
  iconEnd,
  disabled,
}, ref) => {
  const childrenLabel = useChildrenText(children);

  const interactiveVariantProps: InteractiveProps = React.useMemo(() => {
    switch (variant) {
      case 'text':
        return {};
      case 'outline':
        return {
          paint,
          surface: 'button',
          outlined: true,
        };
      case 'contain':
      default:
        return {
          paint,
          surface: 'button',
        };
    }
  }, [variant, paint]);

  const fontVariantProps: FontProps = React.useMemo(() => {
    switch (variant) {
      case 'text':
        return {
          paint,
          decoration: 'underline',
        };
      case 'outline':
        return {
          paint,
        };
      case 'contain':
      default:
        return {};
    }
  }, [variant, paint]);

  return (
    <Interactive
      ref={ref}
      aria-label={label || childrenLabel}
      minWidth="2.5em"
      padding={3}
      disabled={disabled}
      {...interactiveVariantProps}
    >
      <Stack row gap={2} alignItems="center">
        {iconStart && (<Icon name={iconStart} />)}
        <Font
          variant="button"
          {...fontVariantProps}
        >
          {children || ' '}
        </Font>
        {iconEnd && (<Icon name={iconEnd} />)}
      </Stack>
    </Interactive>
  );
});

export default Button;
