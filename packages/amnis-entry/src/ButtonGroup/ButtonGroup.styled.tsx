import styled, { CSSObject } from '@amnis/style/styled';
import type { ButtonGroupProps } from './ButtonGroup.types';

export const ButtonGroupStyled = styled<HTMLDivElement>('div')<Partial<ButtonGroupProps>>(({
  theme,
  direction = 'row',
  disabled = false,
  outlined = false,
}) => {
  const {
    mode, surfaces, pseudoQueries,
  } = theme;

  const style: CSSObject = {
    ...surfaces.button,
    position: 'relative',
    display: 'inline-flex',
    flexDirection: direction,
    alignItems: 'center',
    justifyContent: 'center',
    '& > button': {
      position: 'relative',
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
      },
      [pseudoQueries.focus]: {
        zIndex: 2,
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

  return style;
});

export default ButtonGroupStyled;
