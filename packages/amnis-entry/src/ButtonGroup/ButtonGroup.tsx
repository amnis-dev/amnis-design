import React from 'react';
import { Icon } from '@amnis/icons/Icon';
import { Font } from '@amnis/display/Font';
import { ThemeSpacingLevelOptions } from '@amnis/style/theme.types';
import type { ButtonGroupProps } from './ButtonGroup.types';
import { ButtonGroupStyled } from './ButtonGroup.styled';
import Interactive from '../Interactive/Interactive';

/**
 * ## Button Grouping
 * A series of buttons grouped together.
 */
export const ButtonGroup = React.forwardRef<
HTMLDivElement,
React.ComponentProps<typeof ButtonGroupStyled>
& ButtonGroupProps
>(({
  paint,
  buttons = [],
  disabled = false,
  outlined = false,
  size = 'medium',
  ...props
}, ref) => {
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
    <ButtonGroupStyled
      ref={ref}
      role="group"
      disabled={disabled}
      outlined={outlined}
      {...props}
    >
      {buttons.map(({ label, icon, ...interactiveProps }) => (
        <Interactive
          key={label}
          aria-label={label}
          p={3}
          disabled={disabled}
          outlined={outlined}
          paint={paint}
          sx={({ spacing }) => ({
            display: 'flex',
            alignItems: 'center',
            paddingLeft: spacing[sizeProps.padding],
            paddingRight: spacing[sizeProps.padding],
            width: icon && `calc(${sizeProps.height} * 1.32)`,
            height: sizeProps.height,
          })}
          {...interactiveProps}
        >
          {icon
            ? (
              <Icon name={icon} size={sizeProps.fontSize} style={{ position: 'absolute' }} />
            )
            : <Font paint={outlined ? paint : undefined} variant="button" size={sizeProps.fontSize}>{label}</Font>}
        </Interactive>
      ))}
    </ButtonGroupStyled>
  );
});

export default ButtonGroup;
