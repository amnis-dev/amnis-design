import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@amnis/layout/Stack';
import { Icon } from '@amnis/icons/Icon';

import { Avatar } from './Avatar';

export default {
  title: 'Display/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

const TemplateSizes: ComponentStory<typeof Avatar> = () => (
  <Stack row gap={2}>
    <Avatar
      label="eric-crowell"
      size="tiny"
    />
    <Avatar
      label="eric-crowell"
      size="small"
    />
    <Avatar
      label="eric-crowell"
      size="medium"
    />
    <Avatar
      label="eric-crowell"
      size="large"
    />
    <Avatar
      label="eric-crowell"
      size="huge"
    />
    <Avatar
      label="eric-crowell"
      size="massive"
    />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'eric-crowell',
  size: 'medium',
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  label: 'eric-crowell',
  size: 'medium',
  shape: 'rectangle',
};

export const Custom = Template.bind({});
Custom.args = {
  label: 'eric-crowell',
  size: 'medium',
  children: <Icon name="IoAlbums" size="2em" color="#ffffff" />,
};

export const Image = Template.bind({});
Image.args = {
  label: 'eric-crowell',
  size: 'huge',
  image: '/avatar.jpeg',
};

export const Sizes = TemplateSizes.bind({});
