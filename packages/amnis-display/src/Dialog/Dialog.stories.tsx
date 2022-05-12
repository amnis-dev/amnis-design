import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dialog } from './Dialog';

export default {
  title: 'Display/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Dialog {...args} />
);

const TemplateButton: ComponentStory<typeof Dialog> = (args) => {
  const [dialogOpen, dialogOpenSet] = React.useState(true);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button ref={buttonRef} type="button" onClick={() => dialogOpenSet(!dialogOpen)}>Open Dialog</button>
      <Dialog
        {...args}
        open={dialogOpen}
        anchor={buttonRef}
        onClickAway={() => dialogOpenSet(false)}
      >
        <h1>This is a dialog box!</h1>
      </Dialog>
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Example Dialog',
  open: true,
  children: 'A very basic dialog component',
};

export const Toggle = TemplateButton.bind({});
Toggle.args = {
  label: 'Example Dialog',
  anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
  dialogOrigin: { horizontal: 'center', vertical: 'top' },
};
