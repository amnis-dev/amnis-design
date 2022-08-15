/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled, { CSSObject } from '@amnis/style/styled';
import { BoxStyled } from '@amnis/layout/Box/Box.styled';
import { InteractiveProps } from './Interactive.types';

export const InteractiveStyled = styled<HTMLElement>(BoxStyled)<Partial<InteractiveProps>>(({
  theme,
  paint,
  surface,
  shape,
  outlined,
  color,
  button,
}) => {
  const {
    paints,
    pseudoQueries,
    surfaces,
    shapes,
    states,
  } = theme;

  let style: CSSObject = {
    boxSizing: 'border-box',
    cursor: 'pointer',
    outlineOffset: '0rem',
    outline: `0 solid ${paints.main.color}00`,
    backgroundColor: paints.main.backgroundColor,
    color: color ?? paints.main.color,
    border: button ? 'none' : undefined,
    ...states.base,

    [pseudoQueries.hover]: {
      ...states.hover,
      zIndex: 1,
    },

    [pseudoQueries.active]: {
      ...states.active,
      zIndex: 1,
    },

    [pseudoQueries.focus]: {
      ...states.focus,
      zIndex: 2,
    },

    '&:focus-within': {
      ...states.focus,
      zIndex: 2,
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

  if (shape) {
    style = {
      ...style,
      ...shapes[shape],
    };
  }

  if (outlined) {
    style = {
      ...style,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: paint ? paints[paint || 'main'].backgroundColor : color ?? paints.main.color,
      color: paint ? paints[paint].backgroundColor : color ?? paints.main.color,
      backgroundColor: paint ? `${paints[paint].color} !important` : 'transparent',
    };
  }

  return style;
});

export default InteractiveStyled;
