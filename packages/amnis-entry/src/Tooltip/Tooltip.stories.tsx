import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip } from './Tooltip';

export default {
  title: 'Entry/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: 'Add',
  children: <div>Hover me</div>,
};
