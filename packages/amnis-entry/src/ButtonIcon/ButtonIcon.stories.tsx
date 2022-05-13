import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonIcon } from './ButtonIcon';

export default {
  title: 'Entry/ButtonIcon',
  component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => (
  <ButtonIcon {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Icon Button',
  icon: 'IoAdd',
  paint: 'primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Icon Button',
  icon: 'IoAdd',
  paint: 'primary',
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  label: 'Icon Button',
  icon: 'IoAdd',
  size: 'small',
  paint: 'primary',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Icon Button',
  icon: 'IoAdd',
  size: 'large',
  paint: 'primary',
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Icon Button',
  icon: 'IoAdd',
  paint: 'primary',
  loading: true,
};
