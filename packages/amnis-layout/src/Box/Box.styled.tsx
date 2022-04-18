import styled, { CSSObject } from '@amnis/style/styled';
import { BoxProps } from './Box.types';

export const BoxStyled = styled<HTMLDivElement>('div')<Partial<BoxProps>>(({
  theme,
  paint,
  padding = 0,
  margin = 0,
  display = 'block',
  direction,
  row,
  gap = 0,
  flexWrap = false,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
}) => {
  const { paints, spacing } = theme;

  const isPainted = !!paint;
  const flexDirection = direction || row ? 'row' : 'column';

  const style: CSSObject = {
    flexGrow: 1,
    backgroundColor: isPainted ? paints.main.neutral.backgroundColor : undefined,
    color: isPainted ? paints.main.neutral.color : 'inherit',
    padding: spacing[padding],
    margin: spacing[margin],
    display,
    boxSizing: 'border-box',
    flexDirection,
    gap: spacing[gap],
    flexWrap: flexWrap ? 'wrap' : 'nowrap',
    flexShrink: 1,
    alignItems,
    justifyContent,
  };

  return style;
});

export default BoxStyled;
