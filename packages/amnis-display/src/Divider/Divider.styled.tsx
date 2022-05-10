import styled, { CSSObject } from '@amnis/style/styled';
import type { DividerProps } from './Divider.types';

export const DividerStyled = styled<HTMLHRElement>('hr')<Partial<DividerProps>>(({
  theme,
  variant = 'basic',
  light = false,
}) => {
  const { separators, paints } = theme;

  const style: CSSObject = {
    ...separators[variant],
    backgroundColor: paints.main.color,
    opacity: light ? 0.5 : 1,
  };

  return style;
});

export default DividerStyled;
