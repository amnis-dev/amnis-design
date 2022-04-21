import React from 'react';
import type { EntryInputProps } from './EntryInput.types';
import { EntryInputStyled } from './EntryInput.styled';
import { EntryContext } from '../EntryContext';

/**
 * ## Base Entry Input
 * A basis for a text input within entry context.
 */
export const EntryInput: React.FC<
React.ComponentProps<typeof EntryInputStyled>
& EntryInputProps
> = ({
  refInner = React.createRef(),
  children,
  ...props
}) => {
  const {
    entryInputId,
    entryLabelId,
    entryDescriptionId,
    entryErrorId,
    value,
    label,
    description,
    errors,
    disabled,
    required,
    suggestionSelect,
    suggestionFilterSetter,
    hasLabelElement,
    hasDescriptionElement,
    onChange,
  } = React.useContext(EntryContext);

  /**
   * Compiles aria properties
   */
  const ariaProps = React.useMemo(() => {
    const nextProps: React.ComponentProps<typeof EntryInputStyled> = {
      'aria-invalid': errors.length > 0,
    };
    if (hasLabelElement) {
      nextProps['aria-labelledby'] = entryLabelId;
    } else {
      nextProps['aria-label'] = label;
    }
    if (hasDescriptionElement) {
      nextProps['aria-describedby'] = entryDescriptionId;
    }
    return nextProps;
  }, [
    entryLabelId, label,
    entryDescriptionId, description,
    hasLabelElement, hasDescriptionElement,
    errors,
  ]);

  /**
   * Updates the input if a suggestion is selected from context.
   */
  React.useEffect(() => {
    if (suggestionSelect && refInner?.current) {
      const nativeInputValueSetter = Object?.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
      nativeInputValueSetter?.call(refInner.current, suggestionSelect);
      const event = new Event('input', { bubbles: true });
      refInner.current.dispatchEvent(event);
    }
  }, [suggestionSelect]);

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
      ref={refInner}
      id={entryInputId}
      required={required}
      disabled={disabled}
      value={typeof value === 'string' ? value : ''}
      onChange={handleChange}
      {...ariaProps}
      {...props}
    >
      {children}
    </EntryInputStyled>
  );
};

export default EntryInput;
