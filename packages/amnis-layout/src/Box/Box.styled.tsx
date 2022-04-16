import styled, { CSSObject } from '@amnis/style/styled';
import { BoxProps } from './Box.types';

export const BoxStyled = styled<HTMLDivElement>('div')<Partial<BoxProps>>(({
  theme,
  paint,
  padding = 0,
  margin = 0,
}) => {
  const { paints, spacing } = theme;

  const isPainted = !!paint;

  const style: CSSObject = {
    backgroundColor: isPainted ? paints.main.neutral.backgroundColor : undefined,
    color: isPainted ? paints.main.neutral.color : 'inherit',
    padding: spacing[padding],
    margin: spacing[margin],
    display: 'block',
    boxSizing: 'border-box',
  };

  return style;
});

export default BoxStyled;
