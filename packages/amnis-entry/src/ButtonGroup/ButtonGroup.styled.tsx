import styled, { CSSObject } from '@amnis/style/styled';
import type { ButtonGroupProps } from './ButtonGroup.types';

export const ButtonGroupStyled = styled<HTMLDivElement>('div')<Partial<ButtonGroupProps>>(({
  theme,
  paint,
  direction = 'row',
  disabled = false,
  outlined = false,
}) => {
  const {
    paints, mode, surfaces, pseudoQueries,
  } = theme;

  let style: CSSObject = {
    ...surfaces.button.base,
    position: 'relative',
    display: 'inline-flex',
    flexDirection: direction,
    alignItems: 'center',
    justifyContent: 'center',
    '& > button': {
      position: 'relative',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderLeft: disabled ? '1px solid transparent' : `1px solid ${mode === 'light' ? '#00000088' : '#ffffff88'}`,
      borderRight: disabled ? '1px solid transparent' : `1px solid ${mode === 'light' ? '#00000088' : '#ffffff88'}`,
      marginLeft: -1,
      zIndex: 0,
      [pseudoQueries.hover]: {
        zIndex: 1,
        ...surfaces.button.hover,
      },
      [pseudoQueries.focus]: {
        zIndex: 2,
        ...surfaces.button.focus,
      },
      [pseudoQueries.active]: {
        zIndex: 2,
        ...surfaces.button.active,
      },
      '&:first-of-type': {
        borderTopLeftRadius: 'inherit',
        borderBottomLeftRadius: 'inherit',
        borderTopRightRadius: 'none',
        borderBottomRightRadius: 'none',
        marginLeft: 0,
        borderLeft: outlined ? undefined : '1px solid transparent',
      },
      '&:last-of-type': {
        borderTopLeftRadius: 'none',
        borderBottomLeftRadius: 'none',
        borderTopRightRadius: 'inherit',
        borderBottomRightRadius: 'inherit',
        borderRight: outlined ? undefined : '1px solid transparent',
      },
    },
  };

  if (outlined) {
    style = {
      ...style,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: paint ? paints[paint || 'main'].backgroundColor : paints.main.color,
      color: paint ? paints[paint].backgroundColor : paints.main.color,
      backgroundColor: paint ? `${paints[paint].color} !important` : 'transparent',
    };
  }

  return style;
});

export default ButtonGroupStyled;
