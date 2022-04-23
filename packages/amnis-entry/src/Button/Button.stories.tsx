import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@amnis/layout/Stack';

import { ThemePaintOptions } from '@amnis/style/theme.types';
import { Button } from './Button';

export default {
  title: 'Entry/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const paints: ThemePaintOptions[] = ['primary', 'secondary', 'cool', 'warm', 'base'];

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

const TemplatePaintsVariants: ComponentStory<typeof Button> = () => (
  <Stack gap={3}>
    {paints.map((paint) => (
      <Stack key={paint} gap={3} row>
        <Button paint={paint} variant="text">Text</Button>
        <Button paint={paint} variant="contain">Contain</Button>
        <Button paint={paint} variant="outline">Outline</Button>
        <Button paint={paint} disabled>Disabled</Button>
      </Stack>
    ))}
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  paint: 'primary',
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  paint: 'primary',
  children: 'Button',
  disabled: true,
};

export const Icons = Template.bind({});
Icons.args = {
  paint: 'primary',
  children: 'Button',
  iconStart: 'IoAlarm',
  iconEnd: 'IoSend',
};

export const PaintsAndVariants = TemplatePaintsVariants.bind({});
