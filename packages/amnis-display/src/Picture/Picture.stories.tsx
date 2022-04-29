import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@amnis/layout/Stack';

import { Picture } from './Picture';

export default {
  title: 'Display/Picture',
  component: Picture,
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = (args) => (
  <Picture {...args} />
);

const TemplateLazyLoading: ComponentStory<typeof Picture> = (args) => (
  <Stack style={{ paddingTop: '200vh' }}>
    <Picture {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  width: 456,
  height: 256,
  src: '/amnis_design-16_9-large.png',
  placeholder: '/amnis_design-16_9-large-ph.webp',
  alt: 'Example Image that errors',
};

export const LazyLoading = TemplateLazyLoading.bind({});
LazyLoading.args = {
  width: 456,
  height: 256,
  src: '/amnis_design-16_9-large.png',
  placeholder: '/amnis_design-16_9-large-ph.webp',
  alt: 'Example Image that errors',
};
