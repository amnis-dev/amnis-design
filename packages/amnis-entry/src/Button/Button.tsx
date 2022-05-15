import React from 'react';
import { Icon } from '@amnis/icons/Icon';
import { Font, FontProps } from '@amnis/display/Font';
import { Stack } from '@amnis/layout/Stack';
import { useChildrenText } from '@amnis/hooks/useChildrenText';
import { ThemeSpacingLevelOptions } from '@amnis/style/theme.types';
import { LoaderEllipses } from '@amnis/display/LoaderEllipses';
import type { ButtonProps } from './Button.types';
import { Interactive, InteractiveProps } from '../Interactive';

/**
 * ## Click Input
 * A simple button for user interaction.
 */
export const Button = React.forwardRef<
HTMLButtonElement,
Omit<React.ComponentProps<typeof Interactive>, 'size'>
& ButtonProps
>(({
  children,
  paint,
  label,
  variant = 'contain',
  iconStart,
  iconEnd,
  disabled,
  size = 'medium',
  loading = false,
  ...props
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

  const sizeProps = React.useMemo<{
    fontSize: string;
    padding: ThemeSpacingLevelOptions;
    height: string;
  }>(() => {
    switch (size) {
      case 'small':
        return {
          fontSize: '0.67em',
          padding: 2,
          height: '1.5em',
        };
      case 'large':
        return {
          fontSize: '1.6em',
          padding: 4,
          height: '3.65em',
        };
      case 'medium':
      default:
        return {
          fontSize: '1em',
          padding: 3,
          height: '2.4em',
        };
    }
  }, [size]);

  return (
    <Interactive
      ref={ref}
      button
      aria-label={label || childrenLabel}
      minWidth="2.5em"
      disabled={disabled}
      sx={({ spacing }) => ({
        display: 'flex',
        alignItems: 'center',
        paddingLeft: spacing[sizeProps.padding],
        paddingRight: spacing[sizeProps.padding],
        height: sizeProps.height,
      })}
      {...interactiveVariantProps}
      {...props}
    >
      <Stack row flex={1} gap={2} alignItems="center" justifyContent="center" position="relative">
        {iconStart && (<Icon name={iconStart} />)}
        <Font
          variant="button"
          size={sizeProps.fontSize}
          style={{ color: loading ? 'transparent' : undefined }}
          {...fontVariantProps}
        >
          {children || ' '}
        </Font>
        {iconEnd && (<Icon name={iconEnd} />)}
        {loading ? (
          <Stack
            position="absolute"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            style={{ top: 0, left: 0 }}
          >
            <Font
              variant="button"
              size={sizeProps.fontSize}
            >
              <LoaderEllipses />
            </Font>
          </Stack>
        ) : null}
      </Stack>
    </Interactive>
  );
});

export default Button;
