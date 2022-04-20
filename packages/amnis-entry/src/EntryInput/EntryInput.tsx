import React from 'react';
import { EntryInputProps } from './EntryInput.types';
import { EntryInputStyled } from './EntryInput.styled';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const EntryInput: React.FC<
React.ComponentProps<typeof EntryInputStyled>
& EntryInputProps
> = ({
  refInner,
  children,
  ...props
}) => (
  <EntryInputStyled ref={refInner} {...props}>
    {children}
  </EntryInputStyled>
);

export default EntryInput;
