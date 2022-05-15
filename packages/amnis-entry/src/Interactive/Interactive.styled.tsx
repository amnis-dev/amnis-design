/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled, { CSSObject } from '@amnis/style/styled';
import { BoxStyled } from '@amnis/layout/Box/Box.styled';
import { InteractiveProps } from './Interactive.types';

export const InteractiveStyled = styled<HTMLElement>(BoxStyled)<Partial<InteractiveProps>>(({
  theme,
  surface,
  paint,
}) => {
  const {
    paints,
    pseudoQueries,
    surfaces,
    states,
  } = theme;

  let style: CSSObject = {
    boxSizing: 'border-box',
    cursor: 'pointer',
    outlineOffset: '0rem',
    outline: `0 solid ${paints.main.color}00`,
    backgroundColor: paints.main.backgroundColor,
    color: paint ? paints.main.color : 'inherit',
    ...states.base,

    [pseudoQueries.hover]: {
      ...states.hover,
    },

    [pseudoQueries.active]: {
      ...states.active,
    },

    [pseudoQueries.focus]: {
      ...states.focus,
    },

    '&:focus-within': {
      ...states.focus,
    },

    [pseudoQueries.disabled]: {
      ...states.disabled,
    },
  };

  if (surface) {
    style = {
      ...style,
      ...surfaces[surface].base,

      [pseudoQueries.hover]: {
        ...surfaces[surface].hover,
      },

      [pseudoQueries.active]: {
        ...surfaces[surface].active,
      },

      [pseudoQueries.focus]: {
        ...surfaces[surface].focus,
      },

      '&:focus-within': {
        ...surfaces[surface].focus,
      },

      [pseudoQueries.disabled]: {
        ...surfaces[surface].disabled,
      },
    };
  }

  return style;
});

export default InteractiveStyled;
