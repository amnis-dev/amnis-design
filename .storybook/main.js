const path = require('path');

module.exports = {
  'stories': [
    '../packages/amnis-style/src/**/*.stories.mdx',
    '../packages/amnis-display/src/**/*.stories.mdx',
    '../packages/amnis-display/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/amnis-entry/src/**/*.stories.mdx',
    '../packages/amnis-entry/src/**/*.stories.@(js|jsx|ts|tsx)',
    // '../packages/amnis-landmarks/src/**/*.stories.mdx',
    // '../packages/amnis-landmarks/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/amnis-layout/src/**/*.stories.mdx',
    '../packages/amnis-layout/src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  'staticDirs': ['../static'],
  'framework': '@storybook/react',
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async config => {
    config.resolve.alias = { ...config.resolve.alias,
      '@amnis/hooks': path.resolve(__dirname, "../packages/amnis-hooks/src"),
      '@amnis/style': path.resolve(__dirname, "../packages/amnis-style/src"),
      '@amnis/icons': path.resolve(__dirname, "../packages/amnis-icons/src"),
      '@amnis/display': path.resolve(__dirname, "../packages/amnis-display/src"),
      '@amnis/entry': path.resolve(__dirname, "../packages/amnis-entry/src"),
      // '@amnis/landmarks': path.resolve(__dirname, "../packages/amnis-landmarks/src"),
      '@amnis/layout': path.resolve(__dirname, "../packages/amnis-layout/src")
    };
    return config;
  },
  core: {
    builder: 'webpack5'
  }
};