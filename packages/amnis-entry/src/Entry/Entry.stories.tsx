import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Entry } from './Entry';

export default {
  title: 'Entry/Entry',
  component: Entry,
} as ComponentMeta<typeof Entry>;

const Template: ComponentStory<typeof Entry> = (args) => (
  <Entry {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
};
