import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@amnis/layout/Stack';
import { ButtonIcon } from '@amnis/entry/ButtonIcon';

import { Picture } from './Picture';

export default {
  title: 'Display/Picture',
  component: Picture,
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = (args) => (
  <Picture {...args} />
);

const TemplateChildren: ComponentStory<typeof Picture> = (args) => (
  <Picture {...args}>
    <ButtonIcon label="More information" icon="IoInformation" color="#ffffff" size="small" outlined />
  </Picture>
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

export const Labelling = Template.bind({});
Labelling.args = {
  width: 456,
  height: 256,
  src: '/amnis_design-16_9-large.png',
  placeholder: '/amnis_design-16_9-large-ph.webp',
  alt: 'Example Image that errors',
  title: 'Simple Labelling Example',
  description: 'Image created by Amnis Design: @eCrowDev',
};

export const BarBelow = Template.bind({});
BarBelow.args = {
  width: 456,
  height: 256,
  src: '/amnis_design-16_9-large.png',
  placeholder: '/amnis_design-16_9-large-ph.webp',
  alt: 'Example Image that errors',
  title: 'Simple Labelling Example',
  description: 'Image created by Amnis Design: @eCrowDev',
  bar: 'below',
};

export const Components = TemplateChildren.bind({});
Components.args = {
  width: 456,
  height: 256,
  src: '/amnis_design-16_9-large.png',
  placeholder: '/amnis_design-16_9-large-ph.webp',
  alt: 'Example Image that errors',
  title: 'Simple Labelling Example',
  description: 'Image created by Amnis Design: @eCrowDev',
};

export const Responsive = Template.bind({});
Responsive.args = {
  width: 456,
  height: 256,
  src: '/amnis_design-16_9-large.png',
  placeholder: '/amnis_design-16_9-large-ph.webp',
  alt: 'Example Image that errors',
  title: 'Simple Labelling Example',
  description: 'Image created by Amnis Design: @eCrowDev',
  layout: 'responsive',
};

export const Contain = Template.bind({});
Contain.args = {
  width: 456,
  height: 256,
  src: '/amnis_design-16_9-large.png',
  placeholder: '/amnis_design-16_9-large-ph.webp',
  alt: 'Example Image that errors',
  title: 'Simple Labelling Example',
  description: 'Image created by Amnis Design: @eCrowDev',
  layout: 'contain',
};

export const LazyLoading = TemplateLazyLoading.bind({});
LazyLoading.args = {
  width: 456,
  height: 256,
  src: '/amnis_design-16_9-large.png',
  placeholder: '/amnis_design-16_9-large-ph.webp',
  alt: 'Example Image that errors',
};
