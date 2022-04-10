import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Interface/Button',
  component: Button,
  argTypes: {
    paint: {
      options: ['primary', 'secondary', 'cool', 'warm', 'base'],
      control: { type: 'radio' },
    },
    onClick: { action: 'click' },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const PaintsTemplate: ComponentStory<typeof Button> = (args) => (
  <div>
    <Button paint="primary" label="Primary" {...args} />
    <Button paint="secondary" label="Secondary" {...args} />
    <Button paint="cool" label="Cool" {...args} />
    <Button paint="warm" label="Warm" {...args} />
    <Button paint="base" label="Base" {...args} />
  </div>
);

export const Basic = ButtonTemplate.bind({});
Basic.args = {
  label: 'Click Here',
};

export const DisabledButton = ButtonTemplate.bind({});
DisabledButton.args = {
  label: 'Click Here',
  disabled: true,
};

export const OutlinedButton = ButtonTemplate.bind({});
OutlinedButton.args = {
  label: 'Click Here',
  variant: 'outlined',
};

export const UnstyledButton = ButtonTemplate.bind({});
UnstyledButton.args = {
  label: 'Click Here',
  variant: 'unstyled',
};

export const IconButton = ButtonTemplate.bind({});
IconButton.args = {
  label: 'Click Here',
  variant: 'icon',
};

export const BigButton = ButtonTemplate.bind({});
BigButton.args = {
  label: 'Click Here',
  size: 'big',
};

export const SmallButton = ButtonTemplate.bind({});
SmallButton.args = {
  label: 'Click Here',
  size: 'small',
};

export const ColorPaints = PaintsTemplate.bind({});

export const OutlinedPaints = PaintsTemplate.bind({});
OutlinedPaints.args = {
  variant: 'outlined',
};

export const BigPaints = PaintsTemplate.bind({});
BigPaints.args = {
  size: 'big',
};

export const UnstyledPaints = PaintsTemplate.bind({});
UnstyledPaints.args = {
  variant: 'unstyled',
};
