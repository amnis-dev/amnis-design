import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { Basic } from './Box.stories';

it('renders the Box in the default state', () => {
  const { container } = render(<Basic {...Basic.args} />);
  const element = container.querySelector('div');

  expect(element).toBeDefined();
});
