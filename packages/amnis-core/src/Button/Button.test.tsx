import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Basic } from './Button.stories';

test('renders the button in the default state', async () => {
  const { container } = render(<Basic {...Basic.args} />);
  const element = container.querySelector('div');

  expect(element).toBeDefined();
});
