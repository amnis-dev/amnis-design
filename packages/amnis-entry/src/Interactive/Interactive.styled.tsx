/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled, { CSSObject } from '@amnis/style/styled';
import { Box } from '@amnis/layout/Box';
import { InteractiveProps } from './Interactive.types';

export const InteractiveStyled = styled<HTMLButtonElement>(Box, 'button')<Partial<InteractiveProps>>(({
  theme,
  paint,
}) => {
  const {
    mode,
    paints,
    durations,
    transitions,
    pseudoQueries,
  } = theme;

  const style: CSSObject = {
    display: 'inline-block',
    boxSizing: 'border-box',
    cursor: 'pointer',
    outlineOffset: '0rem',
    outline: `0 solid ${paints.main.neutral.color}00`,
    filter: 'brightness(1)',
    backgroundColor: paint ? paints.main.neutral.backgroundColor : 'transparent',
    color: paint ? paints.main.neutral.color : 'inherit',
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

  return style;
});

export default InteractiveStyled;
