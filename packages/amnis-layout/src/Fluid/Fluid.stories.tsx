import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Fluid } from './Fluid';
import { Box } from '../Box/Box';

export default {
  title: 'Layout/Fluid',
  component: Fluid,
} as ComponentMeta<typeof Fluid>;

const Template: ComponentStory<typeof Fluid> = (args) => (
  <Fluid {...args}>
    <Box paint="primary" basis={12} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 12</Box>
    <Box paint="primary" basis={2} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 2</Box>
    <Box paint="primary" basis={10} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 10</Box>
    <Box paint="primary" basis={4} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 4</Box>
    <Box paint="primary" basis={8} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 8</Box>
    <Box paint="primary" basis={6} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 6</Box>
    <Box paint="primary" basis={6} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 6</Box>
    <Box paint="primary" basis={3} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 3</Box>
    <Box paint="primary" basis={3} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 3</Box>
    <Box paint="primary" basis={3} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 3</Box>
    <Box paint="primary" basis={3} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 3</Box>
    <Box paint="primary" basis={4} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 4</Box>
    <Box paint="primary" basis={4} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 4</Box>
    <Box paint="primary" basis={4} p={1} border="1px solid #888888" style={{ textAlign: 'center' }}>basis = 4</Box>
  </Fluid>
);

export const Basic = Template.bind({});
Basic.args = {
  gap: 4,
};
