import React from 'react';
import { Enumer } from '@amnis/layout/Enumer';
import { Item } from '@amnis/layout/Item';
import { Button } from '@amnis/entry/Button';
import type { NavProps } from './Nav.types';
import { Section } from '../Section';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const Nav = React.forwardRef<
HTMLDivElement,
NavProps
>(({
  children,
}, ref) => (
  <Section
    ref={ref}
    as="nav"
  >
    <Enumer>
      <Item>
        <Button as="a" variant="text">
          Link 1
        </Button>
      </Item>
      <Item>
        <Button as="a" variant="text">
          Link 2
        </Button>
      </Item>
    </Enumer>
  </Section>
));

export default Nav;
