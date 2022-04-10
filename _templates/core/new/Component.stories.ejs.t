---
to: packages/amnis-core/src/<%= Name %>/<%= Name %>.stories.tsx
---
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { <%= Name %> } from './<%= Name %>';

export default {
  title: '<%= h.capitalize(type) %>/<%= Name %>',
  component: <%= Name %>,
} as ComponentMeta<typeof <%= Name %>>;

const Template: ComponentStory<typeof <%= Name %>> = (args) => <<%= Name %> {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};
