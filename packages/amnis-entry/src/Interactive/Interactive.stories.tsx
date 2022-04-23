import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Interactive } from './Interactive';

export default {
  title: 'Entry/Interactive',
  component: Interactive,
} as ComponentMeta<typeof Interactive>;

const Template: ComponentStory<typeof Interactive> = (args) => (
  <Interactive {...args}>
    Element made interactive
  </Interactive>
);

export const Basic = Template.bind({});
Basic.args = {
  padding: 2,
};

export const WithButtonSurface = Template.bind({});
WithButtonSurface.args = {
  padding: 2,
  surface: 'button',
  paint: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  padding: 2,
  surface: 'button',
  paint: 'primary',
  disabled: true,
};

export const WithInputSurface = Template.bind({});
WithInputSurface.args = {
  padding: 2,
  surface: 'input',
};
