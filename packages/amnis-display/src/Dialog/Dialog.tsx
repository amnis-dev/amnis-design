import React from 'react';
import { DialogProps } from './Dialog.types';
import { DialogStyled } from './Dialog.styled';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const Dialog: React.FC<
React.ComponentProps<typeof DialogStyled>
& DialogProps
> = ({
  refInner,
  children,
  ...props
}) => (
  <DialogStyled ref={refInner} {...props}>
    {children}
  </DialogStyled>
);

export default Dialog;
