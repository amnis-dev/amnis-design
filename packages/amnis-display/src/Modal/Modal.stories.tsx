import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';

export default {
  title: 'Display/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args} />
);

const TemplateButton: ComponentStory<typeof Modal> = (args) => {
  const [modalOpen, modalOpenSet] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => modalOpenSet(!modalOpen)}>Open Modal</button>
      <Modal
        {...args}
        open={modalOpen}
        onClose={() => modalOpenSet(false)}
      >
        <p style={{ padding: 0, margin: 0 }}>
          This is some additional possible content for the component.
        </p>
      </Modal>
    </>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  open: true,
  size: 'medium',
  onClose: () => { /** noop */ },
  onConfirm: () => { /** noop */ },
};

export const Toggle = TemplateButton.bind({});
Toggle.args = {
  size: 'medium',
  title: 'Toggled Modal',
  description: 'An examples of a modal component that can be opened and closed.',
};
