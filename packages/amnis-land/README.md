# Amnis Land

A library of components that serve as landmarks on a web pages. Landmarks are ways to define the purpose sectional regions.

In HTML, there are seven sectional elements with specific landmark roles depending on the context. These elements are: `aside`, `footer`, `form`, `header`, `main`, `nav`, and `section`.

For more information, see [W3 Landmarks](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html).

As components, these landmarks also include responsiveness.

## Use within a Page Component

Landmarks are best used as direct children of a `Page` component that organizes and handles the responsiveness of the landmarks.

```tsx
import React from 'react';
import { Land, Header, Main, Nav, Footer } from '@amnis/land';

export const MyApp: React.FC = () => {
  return (
    <Land>
      <Header>My Header</Header>
      <Nav>My navigational links</Nav>
      <Main>Main content</Main>
      <Footer>Footer details</Footer>
    </Land>
  )
}
```