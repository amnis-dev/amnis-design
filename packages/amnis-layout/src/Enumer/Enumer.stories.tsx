import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Enumer } from './Enumer';
import { Item } from '../Item';

export default {
  title: 'Layout/Enumer',
  component: Enumer,
} as ComponentMeta<typeof Enumer>;

const Template: ComponentStory<typeof Enumer> = (args) => (
  <Enumer {...args}>
    <Item
      paint="primary"
      basis={8}
      minHeight={100}
    />
    <Item
      paint="primary"
      basis={4}
      minHeight={100}
    />

    <Item
      paint="secondary"
      minHeight={100}
      basis={4}
    />
    <Item
      paint="secondary"
      basis={4}
      minHeight={100}
    />
    <Item
      paint="secondary"
      basis={4}
      minHeight={100}
    />

    <Item
      paint="warm"
      basis={4}
      minHeight={100}
    />
    <Item
      paint="warm"
      minHeight={100}
      basis={8}
    />
  </Enumer>
);

export const Basic = Template.bind({});
Basic.args = {
  gap: 3,
};
