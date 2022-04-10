import styled, { CSSObject } from '@amnis/style/styled';
import { ButtonType } from './Button.types';

export const ButtonStyled = styled<HTMLButtonElement>('button')<Partial<ButtonType>>(({ variant = 'filled', size = 'normal', theme }) => {
  const {
    fonts, paints, pseudoQueries, transitions, durations, disabled, button, spacing,
  } = theme;

  /**
   * Base styling.
   */
  let style: CSSObject = {
    ...fonts.main,
    ...button,
    backgroundColor: paints.main.neutral.backgroundColor,
    color: paints.main.neutral.color,
    lineHeight: 0.9,
    appearance: 'none',
    border: '0',
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: 700,
    padding: `${spacing[3]} ${spacing[4]}`,
    textAlign: 'center',
    textDecoration: 'none',
    width: 'auto',
    outlineOffset: '0rem',
    outline: `0 solid ${paints.main.neutral.color}00`,
    transition:
      `outline-offset ${durations.short} ${transitions.easeInOut},\
outline ${durations.short} ${transitions.easeInOut},\
background-color ${durations.short} ${transitions.easeInOut},\
color ${durations.short} ${transitions.easeInOut}`,
  };

  style[pseudoQueries.hover] = {
    backgroundColor: paints.main.hover.backgroundColor,
    color: paints.main.hover.color,
    borderBottom: '0',
    textDecoration: 'none',
  };

  style[pseudoQueries.active] = {
    backgroundColor: paints.main.active.backgroundColor,
    color: paints.main.active.color,
  };

  style[pseudoQueries.focus] = {
    outlineOffset: spacing[1],
    outline: `.25rem solid ${paints.main.focus.backgroundColor}`,
  };

  style[pseudoQueries.disabled] = {
    ...disabled,
    MozOsxFontSmoothing: 'antialiased',
    WebkitFontSmoothing: 'antialiased',
  };

  switch (size) {
    case 'big':
      style = {
        ...style,
        fontSize: `calc(${fonts.main.fontSize} * 1.3)`,
        padding: `${spacing[4]} ${spacing[5]}`,
      };
      break;
    case 'small':
      style = {
        ...style,
        fontSize: `calc(${fonts.main.fontSize} * 0.8)`,
        padding: `${spacing[2]} ${spacing[3]}`,
      };
      break;
    default:
      style = {
        ...style,
      };
  }

  switch (variant) {
    case 'unstyled':
      style = {
        ...style,
        MozOsxFontSmoothing: 'inherit',
        WebkitFontSmoothing: 'inherit',
        color: paints.main.neutral.backgroundColor,
        textDecoration: 'underline',
        backgroundColor: 'transparent',
        border: '0',
        borderRadius: '0',
        boxShadow: 'none',
        fontWeight: 400,
        // margin: '0',
        padding: '0',
        textAlign: 'left',

        '&:disabled': {
          MozOsxFontSmoothing: 'antialiased',
          WebkitFontSmoothing: 'antialiased',
          backgroundColor: 'transparent',
          cursor: 'default',
          color: disabled.backgroundColor,
        },

        '&:hover': {
          color: paints.main.hover.backgroundColor,
          backgroundColor: 'transparent',
          boxShadow: 'none',
          textDecoration: 'underline',
        },

        '&:active': {
          color: paints.main.active.backgroundColor,
          backgroundColor: 'transparent',
          boxShadow: 'none',
          textDecoration: 'underline',
        },
      };
      break;

    case 'outlined':
      style = {
        ...style,
        backgroundColor: 'transparent',
        boxShadow: `inset 0 0 0 2px ${paints.main.neutral.backgroundColor}`,
        color: `${paints.main.neutral.backgroundColor}`,

        '&:hover': {
          borderBottom: '0',
          textDecoration: 'none',
          backgroundColor: 'transparent',
          boxShadow: `inset 0 0 0 2px ${paints.main.hover.backgroundColor}`,
          color: `${paints.main.hover.backgroundColor}`,
        },

        '&:active': {
          backgroundColor: 'transparent',
          boxShadow: `inset 0 0 0 2px ${paints.main.active.backgroundColor}`,
          color: `${paints.main.active.backgroundColor}`,
        },

        '&:disabled': {
          MozOsxFontSmoothing: 'antialiased',
          WebkitFontSmoothing: 'antialiased',
          cursor: 'default',
          backgroundColor: 'transparent',
          boxShadow: `inset 0 0 0 2px ${disabled.backgroundColor}`,
          color: `${disabled.backgroundColor}`,
        },
      };
      break;

    default:
      style = {
        ...style,
        display: 'inline-block',
        height: 'auto',
        borderRadius: '50%',
        textAlign: 'center',
        aspectRatio: '1',
        padding: '.33em .33em',

        '& > *': {
          verticalAlign: 'middle',
        },
      };
      break;
  }

  return style;
});

export default ButtonStyled;
