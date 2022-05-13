import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoaderSpin } from './LoaderSpin';

export default {
  title: 'Display/LoaderSpin',
  component: LoaderSpin,
} as ComponentMeta<typeof LoaderSpin>;

const Template: ComponentStory<typeof LoaderSpin> = (args) => (
  <LoaderSpin {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
};
