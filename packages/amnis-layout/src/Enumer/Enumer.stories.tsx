import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Enumer } from './Enumer';
import { Box } from '../Box';

export default {
  title: 'Layout/Enumer',
  component: Enumer,
} as ComponentMeta<typeof Enumer>;

const Template: ComponentStory<typeof Enumer> = (args) => (
  <Enumer {...args}>
    <Box
      paint="primary"
      basis={8}
      minHeight={100}
    />
    <Box
      paint="primary"
      basis={4}
      minHeight={100}
    />

    <Box
      paint="secondary"
      width={100}
      minHeight={100}
      basis={4}
    />
    <Box
      paint="secondary"
      basis={4}
      minHeight={100}
    />
    <Box
      paint="secondary"
      basis={4}
      minHeight={100}
    />

    <Box
      paint="warm"
      basis={4}
      minHeight={100}
    />
    <Box
      paint="warm"
      width={100}
      minHeight={100}
      basis={8}
    />
  </Enumer>
);

export const Basic = Template.bind({});
Basic.args = {
  gap: 3,
};
