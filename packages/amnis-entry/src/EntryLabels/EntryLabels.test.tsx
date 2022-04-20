import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { matchers as emotionMatchers } from '@emotion/jest';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Basic } from './EntryLabels.stories';

expect.extend(emotionMatchers);
expect.extend(toHaveNoViolations);

it('renders basic story properly with no a11y violations', async () => {
  const { container } = render(<Basic {...Basic.args} />);
  const element = container.querySelector('div');

  expect(element).toBeDefined();
  expect(await axe(container)).toHaveNoViolations();
});
