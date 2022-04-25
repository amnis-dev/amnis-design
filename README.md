<h1 align="center">Amnis Design</h1>

<p align="center">
  A react-based design system with an emphasis on clarity, accessibility, and user experience.
</p>

<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/amnis-dev/amnis-design/blob/main/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@amnis/design/latest.svg)](https://www.npmjs.com/package/@amnis/design)
[![npm downloads](https://img.shields.io/npm/dm/@amnis/design.svg)](https://www.npmjs.com/package/@amnis/design)

Workflows

[![Storybook](https://github.com/amnis-dev/amnis-design/actions/workflows/storybook.yml/badge.svg)](https://github.com/amnis-dev/amnis-design/actions/workflows/storybook.yml)
[![Integrity Check](https://github.com/amnis-dev/amnis-design/actions/workflows/integrity-check.yml/badge.svg)](https://github.com/amnis-dev/amnis-design/actions/workflows/integrity-check.yml)
[![Package](https://github.com/amnis-dev/amnis-design/actions/workflows/package.yml/badge.svg)](https://github.com/amnis-dev/amnis-design/actions/workflows/package.yml)

</div>

## Example

|       | URL    |
| :---: | :----- |
| ![Sorybook Logo](media/storybook-logo.png) | [Storybook webpage of Design Componets](https://storybook.amnis.dev) |

## Philosophy

There's a lot to consider when designing a web application, and even more with accessibility and user experience in mind.

Complying to accessibility standards is complex, redundant, and sometimes confusing for common interfaces. Much like having to manage your memory in some low-level languages, it can be extraordinarily difficult to master proper implementation and catch issues when they inevitably arise.

This design system focuses on delivering modern methods that abstract and bundle accessibility and user experience implementations (provided by the [WCAG 2 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)) for desktop and mobile environments: easing the efforts to a better web for all internet users.

This library is inspired by qualities from both the [U.S. Web Design System](https://github.com/uswds/uswds) and [MUI Core](https://github.com/mui/material-ui).

This library also aims help with legal compliance of many [governmental policies](https://www.w3.org/WAI/policies/) for the public and private sectors. You should always provide your own testing to ensure you meet your specific requirements.

## Installation

Amnis Design is available as an [npm package](https://www.npmjs.com/package/@amnis/design).

```sh
# NPM
npm install @amnis/design

# Yarn
npm add @amnis/design
```

You can optionally install the design system by its individual parts.

```sh
# NPM
npm install @amnis/hooks @amnis/style @amnis/icons @amnis/layout @amnis/display @amnis/entry

# Yarn
npm add @amnis/hooks @amnis/style @amnis/icons @amnis/layout @amnis/display @amnis/entry
```

## Getting Started with Amnis

Below is a basic example of rendering a `Button` component:

```jsx
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@amnis/design/Button';

const App = () => {
  return (
    <Button paint="primary" variant="contained">
      Hello Amnis
    </Button>
  );
}

ReactDOM.createRoot(document.querySelector('#app')).render(<App />);
```

Check it out in an interactive sandbox:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/amnis-design-basic-button-08tb3x?file=/src/index.js)

## Contributing

This is a growing project that you can add and improve upon! I'm welcoming to new PRs. Contrubuting can be more than just code too. If you identify an improvement, please [submit a new GitHub issue](https://github.com/amnis-dev/amnis-design/issues/new).

See the **[contributing documentation](docs/CONTRIBUTING.md)**.