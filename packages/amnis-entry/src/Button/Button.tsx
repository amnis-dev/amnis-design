import React from 'react';
import { Icon } from '@amnis/icons/Icon';
import { Font, FontProps } from '@amnis/display/Font';
import type { ButtonProps } from './Button.types';
import { Entry } from '../Entry';
import { Interactive, InteractiveProps } from '../Interactive';

/**
 * # Click Input
 * A simple button for user interaction.
 */
export const Button: React.FC<ButtonProps> = ({
  refInner,
  children,
  paint,
  variant = 'contain',
  ...props
}) => {
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
  }, [variant]);

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
  }, [variant]);

  return (
    <Entry {...props}>
      <Interactive
        refInner={refInner}
        minWidth="2.5em"
        padding={3}
        {...interactiveVariantProps}
      >
        <Font
          variant="button"
          {...fontVariantProps}
        >
          {children || ' '}
        </Font>
      </Interactive>
    </Entry>
  );
};

export default Button;
