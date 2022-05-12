import styled, { CSSObject } from '@amnis/style/styled';
import type { OverlayProps } from './Overlay.types';

export const OverlayStyled = styled<HTMLDivElement>('div')<Partial<OverlayProps>>(({
  theme,
  background = false,
  bg = false,
}) => {
  const { mode, durations, timings } = theme;

  let style: CSSObject = {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    opacity: 0,
    zIndex: 999,

    transition: `opacity ${durations.short} ${timings.easeInOut}`,

    '&[aria-hidden="false"]': {
      opacity: 1,
    },
  };

  if (background || bg) {
    style = {
      ...style,
      backgroundColor: mode === 'light' ? '#00000077' : '#ffffff77',
      backdropFilter: 'blur(2px)',
    };
  }

  return style;
});

export default OverlayStyled;
