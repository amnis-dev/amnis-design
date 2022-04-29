import styled, { CSSObject } from '@amnis/style/styled';
import type { ImageProps } from './Image.types';

export const ImageStyled = styled<HTMLImageElement>('img')<Partial<ImageProps>>(({ theme }) => {
  const style: CSSObject = {
    position: 'relative',
    display: 'block',
    objectFit: 'cover',
    objectPosition: 'center',
  };

  return style;
});

export default ImageStyled;
