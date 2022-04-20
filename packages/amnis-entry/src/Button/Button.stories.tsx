import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '@amnis/layout/Stack';

import { Button } from './Button';

export default {
  title: 'Entry/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

const TemplateVariants: ComponentStory<typeof Button> = () => (
  <Stack gap={3} row>
    <Button paint="primary">Text</Button>
    <Button paint="primary">Painted</Button>
    <Button paint="primary">Outlined</Button>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  paint: 'primary',
  children: 'Button',
};

export const Variants = TemplateVariants.bind({});
