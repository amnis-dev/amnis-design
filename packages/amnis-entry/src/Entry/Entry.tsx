import React, { useMemo } from 'react';
import { useIncrementalId } from '@amnis/hooks/useIncrementalId';
import { EntryProps } from './Entry.types';
import { EntryContext, EntryContextType } from '../EntryContext';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const Entry: React.FC<EntryProps> = ({
  refInner,
  children,
  prefix = 'entry',
  label,
  description,
  errors,
  required = true,
  disabled = false,
  suggestions = [],
}) => {
  const entryRef = React.useRef<HTMLDivElement>(null);
  const entryId = useIncrementalId(prefix);

  const [suggestionFilter, setSuggestionFilter] = React.useState<EntryContextType['suggestionFilter']>('');
  const [suggestionSelect, setSuggestionSelect] = React.useState<EntryContextType['suggestionSelect']>(null);
  const [focused, setFocused] = React.useState<boolean>(false);

  const contextValue: EntryContextType = useMemo(() => ({
    entryRef,
    entryId,
    entryBoxId: `${entryId}-box`,
    entryInputId: `${entryId}-input`,
    entryLabelId: `${entryId}-label`,
    entryErrorId: `${entryId}-error`,
    entryDescriptionId: `${entryId}-desc`,
    entrySuggestionsId: `${entryId}-sugg`,
    label,
    description,
    errors,
    required,
    disabled,
    suggestions,
    suggestionFilter,
    setSuggestionFilter,
    suggestionSelect,
    setSuggestionSelect,
    focused,
    setFocused,
  }), [
    entryRef,
    entryId,
    label,
    description,
    errors,
    required,
    disabled,
    suggestions,
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
