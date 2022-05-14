# Amnis Design: Contributing

Thank you for taking interest in improving this design system! I'm welcoming to new pull requests and label [good first issues](https://github.com/amnis-dev/amnis-design/labels/good%20first%20issue) when possible. As you make your contribution, these guidelines should help you setup and align with the goals of this project, as well as achieve a level of continued quality/maintainability.

**Table of Contents**
- Setup
  1. [Install Tools](#install-tools)
  2. [Prepare Workspace](#prepare-workspace)
  3. [Run Project](#run-project)
- Guidelines
  1. [New Components](#new-components)
  2. [Component Accessibility](#component-accessibility)
  2. [Component Testing](#component-testing)

## Setup

### Install Tools

You'll need tools `git`, `node` and `yarn` to begin.

* [Get Git](https://git-scm.com/downloads)
* [Get Node.JS](https://nodejs.org/)
* [Setup Yarn](https://classic.yarnpkg.com/en/docs/getting-started)

It is highly recommended to develop with [Visual Studio Code](https://code.visualstudio.com/). There are settings in this workspace that help provide useful feedback and automate formatting.

### Prepare Workspace

Clone the workspace from GitHub using `git`.

```sh
# Clone with SSH (Recommended)
git clone git@github.com:amnis-dev/amnis-design.git

# Clone with HTTPS
git clone https://github.com/amnis-dev/amnis-design.git
```

Navigate into the newly cloned repository and install the dependencies with `yarn`.

```sh
# Navigate into the workspace
cd amnis-design

# Install dependencies
yarn install
```

After the installation is complete, the workspace can be opened with **Visual Studio Code** (or your prefered IDE) and can be started.

## Run Project

The project's UI components are rendered within a tool called [Storybook](https://storybook.js.org/). Within this tool, you are provided with instant feedback on how UI components will look and behave.

Run the project in development mode with the following `yarn` script.

```sh
yarn storybook:dev
```

The command output will provide a local address for your browser.

# Guidelines

## New Components

New componets should be created from a boilerplate. This ensures you have an initial set of working code to develop with.

Generate a new component using the following command from the project's root.

```sh
yarn gen:component
```

This will take you though a three-step wizard with a few questions.

```sh
# Determines which package to generate the component in.
# Use the arrow keys to toggle and enter to select
? Select type of component. ... 
> display
  entry
  landmark
  layout

# The name of the component. It should start with a capital letter.
? Name of the new component? » Button

# If new CSS styling needs to be created for the component.
? Include a styling component? (y/N) » N
```

Once complete, you'll find the new files under the following directory (based on your inputs):

`packages/amnis-{type}/src/{Component Name}/...`

| File | Purpose |
| :--- | :------ |
| {Name}.tsx | Contains the React functional component |
| {Name}.types.ts | TypeScript types for the React component properties |
| {Name}.styled.tsx | [Emotion](https://emotion.sh/docs/introduction) Styled component to define CSS rules |
| {Name}.stories.tsx | [Storybook](https://storybook.js.org/) renders of the component in specfic states |
| {Name}.schema.ts | JSON Schema of the serializable component properties (updated by script) |
| {Name}.test.ts | [Testing Library](https://testing-library.com/) with [Jest](https://jestjs.io/) for checking component conditions |

## Component Accessibility

Once you've created your component from the boilerplate, you should already have an idea of what your component is going to be.

Consider the qualities of the component, then read the [Web Content Accessibility Guidelines (WCAG) 2](https://www.w3.org/WAI/WCAG21/quickref/) guidelines that may be relatable. Use [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/) for design patterns of common widget Keep these guidelines in mind as you develop.

There are automated tests created with the boilerplate to help catch possible issues, but they can't catch everything.

The [U.S. Web Design System](https://designsystem.digital.gov/) is an excellent resource for UX accessibility.

## Component Design

When designing a new component, consider code resources that already exist. Reuse those assets when possible or improve upon them to deliver what you need.

For example, if you need to layout a series of elements within your new component, don't create a new styling rule... Use the existing `Stack` component under the `@admin/layout` package. If you need a container with a specific surface style, use the `Box` component.

The [MUI Core](https://mui.com/) UI is a great place to gather inspiration for React component design.

This greatly helps provide predictable and maintainable code. The unit tests will help identify where issues reside (if they occur).

## Component Testing

This project uses [Testing Library](https://testing-library.com/) with [Jest](https://jestjs.io/) to render and check conditions. The boilerplate creates a basic test to check the render and identify possible a11y issues against a [Story](https://storybook.js.org/docs/react/get-started/whats-a-story).

Each [story](https://storybook.js.org/docs/react/get-started/whats-a-story) usually demos the component at a certain state. Design your tests to meet the expectations of the component in that state; such as dimensions, applied css styles, etc...