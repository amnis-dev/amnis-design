import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dialog } from './Dialog';

export default {
  title: 'Display/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = () => {
  const [dialogOpen, dialogOpenSet] = React.useState(true);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={buttonRef} type="button" onClick={() => dialogOpenSet(!dialogOpen)}>Open Dialog</button>
      <Dialog
        label="Example Dialog"
        open={dialogOpen}
        anchor={buttonRef}
        onClickAway={() => dialogOpenSet(false)}
      >
        <h1>This is a dialog box!</h1>
      </Dialog>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
};
