import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Transition } from './Transition';

export default {
  title: 'Display/Transition',
  component: Transition,
} as ComponentMeta<typeof Transition>;

const Template: ComponentStory<typeof Transition> = (args) => (
  <Transition {...args}>
    <div style={{
      backgroundColor: 'grey',
      height: 100,
      width: 100,
      textAlign: 'center',
      verticalAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
    }}
    >
      Transition
    </div>
  </Transition>
);

export const Fade = Template.bind({});
Fade.args = {
  variants: ['fade'],
  active: true,
};

export const Scale = Template.bind({});
Scale.args = {
  variants: ['scale'],
  active: true,
};

export const ScaleHalf = Template.bind({});
ScaleHalf.args = {
  variants: ['scaleHalf'],
  active: true,
};

export const Spin = Template.bind({});
Spin.args = {
  variants: ['spin'],
  active: true,
};

export const SpinHalf = Template.bind({});
SpinHalf.args = {
  variants: ['spinHalf'],
  active: true,
};

export const Multiple = Template.bind({});
Multiple.args = {
  variants: ['fade', 'scale', 'spin'],
  active: true,
};
