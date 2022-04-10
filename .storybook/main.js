const path = require('path');

module.exports = {
  'stories': [
    '../packages/amnis-core/src/**/*.stories.mdx',
    '../packages/amnis-core/src/**/*.stories.@(js|jsx|ts|tsx)'],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  'framework': '@storybook/react',
  webpackFinal: async config => {
    config.resolve.alias = { ...config.resolve.alias,
      '@amnis/hooks': path.resolve(__dirname, "../packages/amnis-hooks/src"),
      '@amnis/style': path.resolve(__dirname, "../packages/amnis-style/src"),
      '@amnis/icons': path.resolve(__dirname, "../packages/amnis-icons/src"),
      '@amnis/core': path.resolve(__dirname, "../packages/amnis-core/src")
    };
    return config;
  },
  // core: {
  //   builder: 'webpack5'
  // }
};