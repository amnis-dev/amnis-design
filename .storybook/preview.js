import { addDecorator } from '@storybook/react';
import ThemeProvider from '../packages/amnis-style/src/ThemeProvider';
import themeLight from '../packages/amnis-style/src/themeLight';

const themes = {
  'Light Theme': themeLight,
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
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'Light Theme',
    toolbar: {
      icon: 'circlehollow',
      items: [
        'Light Theme',
      ],
    },
  }
};