---
to: "<%= styled ? `packages/amnis-${type}/src/${Name}/${Name}.test.tsx` : null %>"
---
import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { Basic } from './<%= Name %>.stories';

it('renders the <%= Name %> in the default state', () => {
  const { container } = render(<Basic {...Basic.args} />);
  const element = container.querySelector('div');

  expect(element).toBeDefined();
});
