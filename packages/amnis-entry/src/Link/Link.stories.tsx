import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from './Link';

export default {
  title: 'Entry/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: 'Link',
};

export const Internal = Template.bind({});
Internal.args = {
  href: '#',
  children: 'Link',
};

export const External = Template.bind({});
External.args = {
  href: 'https://github.com/amnis-dev/amnis-design',
  children: 'Link',
};
