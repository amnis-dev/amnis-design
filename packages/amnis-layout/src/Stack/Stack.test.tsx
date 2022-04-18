import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { matchers as emotionMatchers } from '@emotion/jest';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Column, Row } from './Stack.stories';

expect.extend(emotionMatchers);
expect.extend(toHaveNoViolations);

it('renders column story properly with no a11y violations', async () => {
  const { container } = render(<Column {...Column.args} />);
  const element = container.querySelector('div');

  expect(element).toHaveStyleRule('flex-direction', 'column');

  expect(element).toBeDefined();
  expect(await axe(container)).toHaveNoViolations();
});

it('renders row story properly with no a11y violations', async () => {
  const { container } = render(<Row {...Row.args} />);
  const element = container.querySelector('div');

  expect(element).toHaveStyleRule('flex-direction', 'row');

  expect(element).toBeDefined();
  expect(await axe(container)).toHaveNoViolations();
});
