import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EntryInput } from './EntryInput';

export default {
  title: 'Entry/EntryInput',
  component: EntryInput,
} as ComponentMeta<typeof EntryInput>;

const Template: ComponentStory<typeof EntryInput> = (args) => (
  <EntryInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
};
