import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EntryLabels } from './EntryLabels';

export default {
  title: 'Entry/EntryLabels',
  component: EntryLabels,
} as ComponentMeta<typeof EntryLabels>;

const Template: ComponentStory<typeof EntryLabels> = (args) => (
  <EntryLabels {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
};
