import React, { useMemo } from 'react';
import { useIncrementalId } from '@amnis/hooks/useIncrementalId';
import { EntryProps } from './Entry.types';
import { EntryContext, EntryContextType } from '../EntryContext';

const noop = () => { /** No operation. */ };

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const Entry: React.FC<EntryProps<unknown>> = ({
  refInner,
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
}) => {
  const entryRef = React.useRef<HTMLDivElement>(null);
  const entryId = useIncrementalId(prefix);

  const [suggestionFilter, suggestionFilterSetter] = React.useState<EntryContextType<typeof value>['suggestionFilter']>('');
  const [suggestionSelect, suggestionSelectSetter] = React.useState<EntryContextType<typeof value>['suggestionSelect']>(null);
  const [focused, focusedSetter] = React.useState<boolean>(false);
  const [hasLabelElement, hasLabelElementSetter] = React.useState<boolean>(false);
  const [hasDescriptionElement, hasDescriptionElementSetter] = React.useState<boolean>(false);

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
      <div ref={refInner}>
        {children}
      </div>
    </EntryContext.Provider>
  );
};

export default Entry;
