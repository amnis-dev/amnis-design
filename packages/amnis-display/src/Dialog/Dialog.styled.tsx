import styled, { CSSObject } from '@amnis/style/styled';
import { DialogProps } from './Dialog.types';

export const DialogStyled = styled<HTMLDivElement>('div')<Partial<DialogProps>>(() => {
  const style: CSSObject = {

  };

  return style;
});

export default DialogStyled;
