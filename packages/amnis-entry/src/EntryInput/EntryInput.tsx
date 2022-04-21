/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { EntryInputStyled } from './EntryInput.styled';
import { EntryContext } from '../EntryContext';
import useEntryAriaProps from '../useEntryAriaProps';

/**
 * ## Base Entry Input
 * A basis for a text input within entry context.
 */
export const EntryInput = React.forwardRef<
HTMLInputElement,
React.ComponentProps<typeof EntryInputStyled>
>(({
  ...props
}, ref) => {
  const {
    entryInputId,
    value,
    disabled,
    required,
    suggestionFilterSetter,
    onChange,
  } = React.useContext(EntryContext);

  const ariaProps = useEntryAriaProps();

  /**
   * Handles input changes.
   */
  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue: string = event.target.value;
    suggestionFilterSetter(targetValue);
    onChange(targetValue, event);
  }, [onChange]);

  return (
    <EntryInputStyled
      /** @ts-ignore */
      ref={ref}
      id={entryInputId}
      required={required}
      disabled={disabled}
      value={typeof value === 'string' ? value : ''}
      onChange={handleChange}
      {...ariaProps}
      {...props}
    />
  );
});

export default EntryInput;
