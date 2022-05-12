/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled, { CSSObject } from '@amnis/style/styled';
import { BoxStyled } from '@amnis/layout/Box/Box.styled';
import { InteractiveProps } from './Interactive.types';

export const InteractiveStyled = styled<HTMLButtonElement>(BoxStyled, 'button')<Partial<InteractiveProps>>(({
  theme,
  paint,
}) => {
  const {
    mode,
    paints,
    durations,
    timings,
    pseudoQueries,
    states,
  } = theme;

  const style: CSSObject = {
    boxSizing: 'border-box',
    cursor: 'pointer',
    outlineOffset: '0rem',
    outline: `0 solid ${paints.main.color}00`,
    filter: 'brightness(1)',
    backgroundColor: paints.main.backgroundColor,
    color: paint ? paints.main.color : 'inherit',
    transition:
      `outline-offset ${durations.short} ${timings.easeInOut},\
outline ${durations.short} ${timings.easeInOut},\
background-color ${durations.short} ${timings.easeInOut},\
color ${durations.short} ${timings.easeInOut}`,

    [pseudoQueries.hover]: {
      filter: mode === 'light' ? 'brightness(0.8)' : 'brightness(1.2)',
    },

    [pseudoQueries.active]: {
      filter: mode === 'light' ? 'brightness(0.7)' : 'brightness(1.3)',
    },

    [pseudoQueries.focus]: {
      ...states.focused,
    },

    '&:focus-within': {
      ...states.focused,
    },

    [pseudoQueries.disabled]: {
      ...states.disabled,
    },
  };

  return style;
});

export default InteractiveStyled;
