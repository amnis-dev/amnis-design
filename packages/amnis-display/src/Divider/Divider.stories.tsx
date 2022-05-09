import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from './Divider';

export default {
  title: 'Display/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
};
