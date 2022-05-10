import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Entry/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  paint: 'primary',
  buttons: [
    { label: 'One' },
    { label: 'Two' },
    { label: 'Three' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  paint: 'primary',
  buttons: [
    { label: 'One' },
    { label: 'Two' },
    { label: 'Three' },
  ],
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
  paint: 'primary',
  buttons: [
    { label: 'One' },
    { label: 'Two' },
    { label: 'Three' },
  ],
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  paint: 'primary',
  buttons: [
    { label: 'One' },
    { label: 'Two' },
    { label: 'Three' },
  ],
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  paint: 'primary',
  buttons: [
    { label: 'One' },
    { label: 'Two' },
    { label: 'Three' },
  ],
};

export const SmallIcons = Template.bind({});
SmallIcons.args = {
  size: 'small',
  paint: 'primary',
  buttons: [
    { label: 'One', icon: 'IoThumbsUp' },
    { label: 'Two', icon: 'IoThumbsDown' },
    { label: 'Three', icon: 'IoStar' },
  ],
};

export const LargeIcons = Template.bind({});
LargeIcons.args = {
  size: 'large',
  paint: 'primary',
  buttons: [
    { label: 'One', icon: 'IoThumbsUp' },
    { label: 'Two', icon: 'IoThumbsDown' },
    { label: 'Three', icon: 'IoStar' },
  ],
};

export const Icons = Template.bind({});
Icons.args = {
  paint: 'primary',
  buttons: [
    { label: 'One', icon: 'IoThumbsUp' },
    { label: 'Two', icon: 'IoThumbsDown' },
    { label: 'Three', icon: 'IoStar' },
  ],
};
