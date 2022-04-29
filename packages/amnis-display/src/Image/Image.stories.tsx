import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from './Image';

export default {
  title: 'Display/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
  <Image {...args} />
);

export const Intrinsic = Template.bind({});
Intrinsic.args = {
  width: 456,
  height: 256,
  src: '/amnis_design-16_9.png',
  alt: 'Example Image that errors',
  layout: 'intrinsic',
};

export const Responsive = Template.bind({});
Responsive.args = {
  width: 456,
  height: 256,
  src: '/amnis_design-16_9.png',
  alt: 'Example Image that errors',
  layout: 'responsive',
};

export const Contain = Template.bind({});
Contain.args = {
  width: 456,
  height: 256,
  src: '/amnis_design-16_9.png',
  alt: 'Example Image that errors',
  layout: 'contain',
};

export const Cover = Template.bind({});
Cover.args = {
  width: 456,
  height: 256,
  src: '/amnis_design-16_9.png',
  alt: 'Example Image that errors',
  layout: 'cover',
};
