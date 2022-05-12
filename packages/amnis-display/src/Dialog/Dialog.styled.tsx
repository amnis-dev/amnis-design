import styled, { CSSObject } from '@amnis/style/styled';
import { BoxStyled } from '@amnis/layout/Box/Box.styled';
import type { DialogProps } from './Dialog.types';

export const DialogStyled = styled<HTMLDivElement>(BoxStyled, 'div')<Partial<DialogProps>>(({
  theme,
}) => {
  const {
    durations, timings,
  } = theme;

  const style: CSSObject = {
    position: 'absolute',
    display: 'inline-block',
    overflow: 'hidden',
    opacity: 0,
    outlineOffset: '0',
    outline: 'none',
    transition: `opacity ${durations.short} ${timings.easeInOut}`,
    width: '100%',

    '&[aria-hidden="false"]': {
      opacity: 1,
      zIndex: 99,
    },
  };

  return style;
});

export default DialogStyled;
