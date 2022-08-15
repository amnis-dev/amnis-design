import { addDecorator } from '@storybook/react';
import ThemeProvider from '../packages/amnis-style/src/ThemeProvider';
import themeLight from '../packages/amnis-style/src/themeLight';
import themeDark from '../packages/amnis-style/src/themeDark';

const themes = {
  'Light Theme': themeLight,
  'Dark Theme': themeDark,
};

const withTheme = (Story, context) => {

  const themeKey = context.globals.theme;

  return (
    <ThemeProvider theme={themes[themeKey]} root>
      <Story {...context} />
    </ThemeProvider>
  )
}

addDecorator(withTheme);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Layout', 'Display', 'Entry', 'Lands']
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'Light Theme',
    toolbar: {
      icon: 'circlehollow',
      items: [
        'Light Theme',
        'Dark Theme',
      ],
    },
  }
};