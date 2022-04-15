# Amnis Design Development

A guide to contributing code to the baseline.

**Table of Contents**
1. [Setup](#setup)
2. [Prepare Workspace](#prepare-workspace)
3. [Run Project](#run-project)
4. [New Components](#new-components)

## Setup

### Install Tools

You'll need tools `git`, `node` and `yarn` to begin.

* [Get Git](https://git-scm.com/downloads)
* [Get Node.JS](https://nodejs.org/)
* [Setup Yarn](https://classic.yarnpkg.com/en/docs/getting-started)

It is highly recommended to develop with [Visual Studio Code](https://code.visualstudio.com/). There are settings and plugins in this workspace that help development.

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
yarn storybook
```

The command output will provide a local address for your browser.

## New Components

