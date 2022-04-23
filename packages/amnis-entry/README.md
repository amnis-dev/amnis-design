# Amnis Entry

This package presents a collection of components for building or using preconfigured components for user input. Each input component has their own context for managing labels, descriptions, suggestions, state, errors, values, and hints.

## Using an Entry Component

Using an entry component is similar to any other component, except that labeling text is required.

```tsx
import React from 'react';
import TextInput from '@amnis/entry/TextInput';

export const MyComponent: React.FC = () => {

  const [value, valueSet] = useState('');

  function handleChange(newValue) {
    valueSet(newValue);
  }

  return (
    <TextInput
      label="Required Label"
      description="A basic text input field"
      value={value}
      onChange={handleChange}
    />
  );
}
```

## Entry Building Blocks

The following is a list of reusable components for creating many types of entries.

| Component | Description |
| --- | --- |
| Entry | The highest level component that manages the context of the entry. |
| EntryInput | An unstyled input area for text. |
| EntryDetails | Component that displays the labels, descriptions, errors, and if the field is required or not. |
| EntryBox | A visible box that wraps text or object values within. |
| EntrySuggestions | A dialog for providing additional suggestions from textual input. |

## Custom Entry

You can build a custom entry component by utilizing the entry building blocks that come with this package.

Here's a quick guide to building a simple text input entry.

### Step 1: Setup

Begin by importing the root `Entry` component.

```tsx
import React from 'react';
// Start by importing the root Entry component and type.
import { Entry, EntryProps } from '@amnis/entry/Entry';

// Use EntryProps and provide the type of the input value.
export const MyTextInput: React.FC<EntryProps<string>> = (props) => {

  // The `Entry` component must be the parent of all other blocks
  // This is because the Entry component supplies the context.
  return (
    <Entry {...props}>
      {/** Other entry blocks will go here */}
    </Entry>
  );
}
```

### Step 2: Allow Input

Add an area for textual input to capture text entry from the user.

```tsx
import React from 'react';
import { Entry, EntryProps } from '@amnis/entry/Entry';
// Import the entry input component.
import { EntryInput } from '@amnis/entry/EntryInput';

export const MyTextInput: React.FC<EntryProps<string>> = (props) => {

  return (
    <Entry {...props}>
      
        <EntryInput />

    </Entry>
  );
}
```

### Step 3: Provide Interactive Feedback

Wrapp the input with an interactive component that provides visuals and feedback to the user.

```tsx
import React from 'react';
import { Entry, EntryProps } from '@amnis/entry/Entry';
// Import the input element and a box to contain it within.
import { EntryInput } from '@amnis/entry/EntryInput';
import { Interactive } from '@amnis/entry/Interactive';

export const MyTextInput: React.FC<EntryProps<string>> = (props) => {

  return (
    <Entry {...props}>
      
      {/** Set the surface style to "input" **/}
      <Interactive surface="input">
        <EntryInput />
      </Interactive>

    </Entry>
  );
}
```

### Step 4: Show Details (optional)

Insert where the entry details should be displayed.

The details show labels, descriptions, hints, and errors to the user (if needed).

```tsx
import React from 'react';
import { Entry, EntryProps } from '@amnis/entry/Entry';
import { EntryInput } from '@amnis/entry/EntryInput';
import { EntryBox } from '@amnis/entry/EntryBox';
// Import the EntryDetails block.
import { EntryDetails } from '@amnis/entry/EntryDetails';

export const MyTextInput: React.FC<EntryProps<string>> = (props) => {

  return (
    <Entry {...props}>
      
      <EntryDetails />

      <EntryBox>
        <EntryInput />
      </EntryBox>

    </Entry>
  );
}
```

### Step 5: Provide Suggestions (optional)

For textual entries, it is sometimes nice to provide input suggestions while the user is typing.

```tsx
import React from 'react';
import { Entry, EntryProps } from '@amnis/entry/Entry';
import { EntryInput } from '@amnis/entry/EntryInput';
import { EntryBox } from '@amnis/entry/EntryBox';
import { EntryDetails } from '@amnis/entry/EntryDetails';
// Import the entry block for providing drop-down suggestions
import { EntrySuggestions } from '@amnis/entry/EntrySuggestions';

export const MyTextInput: React.FC<EntryProps<string>> = (props) => {

  return (
    <Entry {...props}>
      
      <EntryDetails />

      <EntryBox>
        <EntryInput />
      </EntryBox>

      <EntrySuggestions />

    </Entry>
  );
}
```

A completely accessilble and functional text input component has be created.