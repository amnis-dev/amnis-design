module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: './',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
  ],
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'import/no-extraneous-dependencies': [0, {
      devDependencies: ['**/*.test.js', '**/*.stories.js'],
    }],
    'react/jsx-props-no-spreading': [1, {
      html: 'enforce',
      custom: 'ignore',
      explicitSpread: 'enforce',
    }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: [
        '**/*.stories.js',
        '**/*.stories.jsx',
        '**/*.stories.ts',
        '**/*.stories.tsx',
      ],
      rules: {
        'react/function-component-definition': 0,
      },
    },
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
