import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from './Box';

export default {
  title: 'Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    <h1>Filler Content</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus
      lacus sit amet odio volutpat sodales. Aenean laoreet id turpis ac posuere.
      Nam venenatis eget lorem sit amet hendrerit. Sed tempor tellus et lectus
      vulputate eleifend. Suspendisse sollicitudin ex sit amet libero vehicula
      tempus. Suspendisse iaculis nibh vel odio lobortis, et molestie libero
      vestibulum. Nunc at egestas mi. Donec tincidunt ex a fringilla sagittis.
      Sed accumsan vitae nisi ac pellentesque. Nunc sagittis, purus ut suscipit
      dapibus, mauris lectus auctor sem, iaculis congue dui nunc non velit.
      Praesent massa lectus, vulputate tristique accumsan a, dignissim tempor
      eros. Ut mollis in ligula quis dapibus. Donec lectus libero, tincidunt non
      mollis ut, ullamcorper id nunc. Duis congue malesuada nibh, sed sodales
      neque aliquam dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Nam viverra leo ut neque porttitor, vel aliquet quam consequat.
    </p>
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {
  border: '1px dashed #888888',
  padding: 3,
};

export const Painted = Template.bind({});
Painted.args = {
  border: '1px dashed #888888',
  padding: 3,
  paint: 'primary',
};

export const PaperSurface = Template.bind({});
PaperSurface.args = {
  padding: 3,
  surface: 'paper',
};

export const ButtonSurface = Template.bind({});
ButtonSurface.args = {
  padding: 3,
  surface: 'button',
};

export const ButtonSurfaceOutlined = Template.bind({});
ButtonSurfaceOutlined.args = {
  padding: 3,
  surface: 'button',
  paint: 'primary',
  outlined: true,
};

export const InputSurface = Template.bind({});
InputSurface.args = {
  padding: 3,
  surface: 'input',
};
