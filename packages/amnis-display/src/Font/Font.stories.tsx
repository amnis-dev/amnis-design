import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Font } from './Font';

export default {
  title: 'Display/Font',
  component: Font,
} as ComponentMeta<typeof Font>;

const ipsum = `\
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.\
`;

// const Template: ComponentStory<typeof Font> = (args) => <Font {...args} />;

const TemplateVariants: ComponentStory<typeof Font> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
    <Font v="heading-1" {...args}>h1. Heading 1</Font>
    <Font v="heading-2" {...args}>h2. Heading 2</Font>
    <Font v="heading-3" {...args}>h3. Heading 3</Font>
    <Font v="heading-4" {...args}>h4. Heading 4</Font>
    <Font v="heading-5" {...args}>h5. Heading 5</Font>
    <Font v="heading-6" {...args}>h6. Heading 6</Font>
    <Font v="subtitle-1" {...args}>h2. Subtitle 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Font>
    <Font v="subtitle-2" {...args}>h2. Subtitle 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Font>
    <Font v="body-1" {...args}>
      p. Body 1.
      {' '}
      {ipsum}
    </Font>
    <Font v="body-2" {...args}>
      p. Body 2.
      {' '}
      {ipsum}
    </Font>
  </div>
);

export const Variants = TemplateVariants.bind({});
Variants.args = {
};
