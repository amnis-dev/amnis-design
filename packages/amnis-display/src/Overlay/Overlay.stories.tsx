import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Overlay } from './Overlay';

export default {
  title: 'Display/Overlay',
  component: Overlay,
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args} />
);

const TemplateButton: ComponentStory<typeof Overlay> = (args) => {
  const [overlayOpen, overlayOpenSet] = React.useState(true);

  return (
    <>
      <button type="button" onClick={() => overlayOpenSet(!overlayOpen)}>Open Overlay</button>
      <Overlay
        {...args}
        open={overlayOpen}
        onClick={() => overlayOpenSet(false)}
      >
        <h1>This is a toggled overlay!</h1>
      </Overlay>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  open: true,
  background: true,
};

export const Toggle = TemplateButton.bind({});
Toggle.args = {
  open: true,
  background: true,
};
