import React, { useMemo } from 'react';
import { useIncrementalId } from '@amnis/hooks/useIncrementalId';
import { EntryProps } from './Entry.types';
import { EntryContext, EntryContextType } from '../EntryContext';

const noop = () => { /** No operation. */ };

/**
 * ## User Entries
 * This is a utility component that supplies entry context to help simplify user input components.
 */
export const Entry = React.forwardRef<
HTMLDivElement,
EntryProps<unknown>
>(({
  children,
  prefix = 'entry',
  value,
  label,
  description = '',
  errors = [],
  required = true,
  disabled = false,
  suggestions = [],
  onChange = noop,
}, ref) => {
  const entryRef = React.useRef<HTMLDivElement>(null);
  const entryId = useIncrementalId(prefix);

  const [suggestionFilter, suggestionFilterSetter] = React.useState<EntryContextType<typeof value>['suggestionFilter']>('');
  const [suggestionSelect, suggestionSelectSetter] = React.useState<EntryContextType<typeof value>['suggestionSelect']>(null);
  const [focused, focusedSetter] = React.useState<boolean>(false);
  const [hasLabelElement, hasLabelElementSetter] = React.useState<boolean>(false);
  const [hasDescriptionElement, hasDescriptionElementSetter] = React.useState<boolean>(false);
  const [hasErrorElement, hasErrorElementSetter] = React.useState<boolean>(false);

  const contextValue = useMemo<EntryContextType<typeof value>>(() => ({
    entryRef,
    entryId,
    entryBoxId: `${entryId}-box`,
    entryInputId: `${entryId}-input`,
    entryLabelId: `${entryId}-label`,
    entryErrorId: `${entryId}-error`,
    entryDescriptionId: `${entryId}-desc`,
    entrySuggestionsId: `${entryId}-sugg`,
    value,
    label,
    description,
    errors,
    required,
    disabled,
    suggestions,
    suggestionFilter,
    suggestionFilterSetter,
    suggestionSelect,
    suggestionSelectSetter,
    focused,
    focusedSetter,
    hasLabelElement,
    hasLabelElementSetter,
    hasDescriptionElement,
    hasDescriptionElementSetter,
    hasErrorElement,
    hasErrorElementSetter,
    onChange,
  }), [
    entryRef,
    entryId,
    label,
    description,
    errors,
    required,
    disabled,
    suggestions,
    onChange,
  ]);

  return (
    <EntryContext.Provider value={contextValue}>
      <div ref={ref}>
        {children}
      </div>
    </EntryContext.Provider>
  );
});

export default Entry;
