import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from './Skeleton';

export default {
  title: 'Display/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  buffer: 256,
};

export const Circle = Template.bind({});
Circle.args = {
  variant: 'circle',
  width: 50,
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  variant: 'rectangle',
  width: 50,
  height: 50,
};
