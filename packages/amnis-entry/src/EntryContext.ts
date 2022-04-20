import React from 'react';

const noop = () => {
  // No operation
};

export interface EntryContextType {
  entryRef: React.RefObject<HTMLDivElement>;
  entryId: string;
  entryBoxId: string;
  entryInputId: string;
  entryLabelId: string;
  entryErrorId: string;
  entryDescriptionId: string;
  entrySuggestionsId: string;
  label?: string;
  description?: string;
  errors?: string[];
  required: boolean;
  disabled: boolean;
  focused: boolean;
  setFocused: (arg0: boolean) => void;
  suggestions: string[];
  suggestionFilter: string;
  setSuggestionFilter: (arg0: string) => void;
  suggestionSelect: string | null;
  setSuggestionSelect: (arg0: string | null) => void;
}

export const entryContextDefault: EntryContextType = {
  entryRef: React.createRef<HTMLDivElement>(),
  entryId: 'entry',
  entryBoxId: 'entry-box',
  entryInputId: 'entry-input',
  entryLabelId: 'entry-label',
  entryErrorId: 'entry-error',
  entryDescriptionId: 'entry-desc',
  entrySuggestionsId: 'entry-sugg',
  suggestions: [],
  suggestionFilter: '',
  setSuggestionFilter: noop,
  suggestionSelect: null,
  setSuggestionSelect: noop,
  required: false,
  disabled: false,
  focused: false,
  setFocused: noop,
};

export const EntryContext = React.createContext<EntryContextType>(entryContextDefault);

export default EntryContext;
