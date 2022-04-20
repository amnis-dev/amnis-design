import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dialog } from './Dialog';

export default {
  title: 'Display/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Dialog {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
};
