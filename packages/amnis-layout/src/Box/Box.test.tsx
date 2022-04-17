import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { matchers as emotionMatchers } from '@emotion/jest';
import { axe, toHaveNoViolations } from 'jest-axe';

import { styledDefaultTheme } from '@amnis/style/styled';
import { Basic, Painted } from './Box.stories';

expect.extend(emotionMatchers);
expect.extend(toHaveNoViolations);

it('renders basic story properly with no a11y violations', async () => {
  const { container } = render(<Basic {...Basic.args} />);
  const element = container.querySelector('div');

  expect(element).toBeDefined();
  expect(await axe(container)).toHaveNoViolations();
});

it('renders painted story properly with no a11y violations', async () => {
  const { container } = render(<Painted {...Painted.args} />);
  const element = container.querySelector('div');

  expect(element).toBeDefined();

  expect(element).toHaveStyleRule('background-color', styledDefaultTheme.paints.primary.neutral.backgroundColor);
  expect(element).toHaveStyleRule('color', styledDefaultTheme.paints.primary.neutral.color);

  expect(await axe(container)).toHaveNoViolations();
});
