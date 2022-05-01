import styled, { CSSObject } from '@amnis/style/styled';
import type { TooltipProps } from './Tooltip.types';

export const TooltipStyled = styled<HTMLDivElement>('div')<
Partial<TooltipProps>
>(({ theme, paint }) => {
  const { paints } = theme;
  const isPainted = !!paint;

  const style: CSSObject = {
    position: 'relative',
    padding: 20,
    display: 'inline-flex',
    '&:hover': {
      '&::before': {
        display: 'block',
      },
    },
    '&::before': {
      position: 'absolute',
      content: 'attr(title)',
      display: 'none',
      top: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: 5,
      backgroundColor: isPainted ? paints.main.neutral.backgroundColor : 'rgba(0,0,0,0.75)',
      color: isPainted ? paints.main.neutral.color : '#fff',
    },
  };

  return style;
});

export default TooltipStyled;
