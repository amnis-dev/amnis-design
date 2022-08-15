import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stack } from '@amnis/layout/Stack';
import { Font } from '@amnis/display/Font';
import { Link } from '@amnis/entry/Link';

import { Section } from './Section';

export default {
  title: 'Lands/Section',
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args}>
    <Stack gap={4}>
      <Font variant="heading-1">Sectional Landmark</Font>
      <Font variant="subtitle-1">
        {'A generic standalone section of a document, which doesn\'t have a more specific semantic element to represent it.'}
      </Font>
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section"
        target="_blank"
      >
        MDN HTML Element Section
      </Link>
    </Stack>
  </Section>
);

export const Basic = Template.bind({});
Basic.args = {
  paint: 'primary',
  padding: 7,
};
