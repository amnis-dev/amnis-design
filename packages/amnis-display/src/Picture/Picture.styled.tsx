import styled, { CSSObject } from '@amnis/style/styled';
import type { PictureProps } from './Picture.types';

export const PictureStyled = styled<HTMLPictureElement>('picture')<Partial<PictureProps>>(({ theme }) => {
  const style: CSSObject = {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: theme.paints.base.neutral.backgroundColor,
  };

  return style;
});

export default PictureStyled;
