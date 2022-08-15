import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Item } from './Item';

export default {
  title: 'Layout/Item',
  component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => (
  <ul>
    <Item {...args} />
  </ul>
);

export const Basic = Template.bind({});
Basic.args = {
};
