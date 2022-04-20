/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled, { CSSObject } from '@amnis/style/styled';
import { InteractiveProps } from './Interactive.types';

export const InteractiveStyled = styled<HTMLButtonElement>('button')<Partial<InteractiveProps>>(({
  theme,
  surface,
}) => {
  const {
    mode,
    paints,
    spacing,
    durations,
    transitions,
    pseudoQueries,
    surfaces,
  } = theme;

  let style: CSSObject = {
    display: 'inline-block',
    boxSizing: 'border-box',
    cursor: 'pointer',
    border: '0',
    margin: 0,
    padding: 0,
    outlineOffset: '0rem',
    outline: `0 solid ${paints.main.neutral.color}00`,
    filter: 'brightness(1)',
    backgroundColor: 'transparent',
    transition:
      `outline-offset ${durations.short} ${transitions.easeInOut},\
outline ${durations.short} ${transitions.easeInOut},\
background-color ${durations.short} ${transitions.easeInOut},\
color ${durations.short} ${transitions.easeInOut}`,

    [pseudoQueries.hover]: {
      filter: mode === 'light' ? 'brightness(0.9)' : 'brightness(1.1)',
    },

    [pseudoQueries.active]: {
      filter: mode === 'light' ? 'brightness(0.85)' : 'brightness(1.15)',
    },

    [pseudoQueries.focus]: {
      outlineOffset: '.2rem',
      outline: `.25rem solid ${paints.main.focus.backgroundColor}`,
    },

    '&:focus-within': {
      outlineOffset: '.2rem',
      outline: `.25rem solid ${paints.main.focus.backgroundColor}`,
    },

    [pseudoQueries.disabled]: {
      opacity: 0.7,
      cursor: 'unset',
      pointerEvents: 'none',
      MozOsxFontSmoothing: 'antialiased',
      WebkitFontSmoothing: 'antialiased',
    },
  };

  if (surface) {
    switch (surface) {
      case 'button':
        style = {
          ...style,
          borderRadius: surfaces.button?.borderRadius,
        };
        break;
      case 'input':
      default:
        style = {
          ...style,
          borderRadius: surfaces.input?.borderRadius,
        };
    }
  }

  return style;
});

export default InteractiveStyled;
