import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stack } from './Stack';

export default {
  title: 'Layout/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    {[...Array(3)].map((val, index) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        style={{
          flex: 1,
          width: '100%',
          minWidth: 20,
          height: '100%',
          minHeight: 20,
          backgroundColor: '#888888',
        }}
      />
    ))}
  </Stack>
);

export const Column = Template.bind({});
Column.args = {
  column: true,
  stretch: true,
  gap: 2,
  maxWidth: 200,
  maxHeight: 200,
};

export const Row = Template.bind({});
Row.args = {
  row: true,
  stretch: true,
  gap: 2,
  maxWidth: 200,
  height: 200,
};
