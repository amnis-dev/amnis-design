# Amnis Icons

Amnis Design does not have it's own set of icons, but instead uses a great set from [Ionicons 5](https://ionic.io/ionicons) and [Heroicons](https://github.com/tailwindlabs/heroicons). This package is a single `Icon` component that can select an SVG graphic with a string key.

See the full list of icons from this [React Icons page](https://react-icons.github.io/react-icons/icons?name=io5).

## Usage Example

```tsx
import React from 'react';
import Icon from '@amnis/icons';

export const MyComponent: React.FC = () => {
  return <Icon type="IoTrophy" />
}
```

## Why Ionicons 5?

[Ionicons 5](https://ionic.io/ionicons) was chosen for its large variety and MIT licensing. [Heroicons](https://github.com/tailwindlabs/heroicons) is used to cover some missing icons from the Ionicons set.