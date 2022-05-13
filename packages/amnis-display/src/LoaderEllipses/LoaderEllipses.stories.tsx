import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoaderEllipses } from './LoaderEllipses';

export default {
  title: 'Display/LoaderEllipses',
  component: LoaderEllipses,
} as ComponentMeta<typeof LoaderEllipses>;

const Template: ComponentStory<typeof LoaderEllipses> = (args) => (
  <LoaderEllipses {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: '0.8em',
  duration: 0.7,
};
