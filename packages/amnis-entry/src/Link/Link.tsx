import React from 'react';
import { Icon } from '@amnis/icons/Icon';
import { useLocation } from '@amnis/hooks/useLocation';
import { useChildrenText } from '@amnis/hooks/useChildrenText';
import type { LinkProps } from './Link.types';
import { LinkStyled } from './Link.styled';

/**
 * List of link text that's too generic.
 * https://web.dev/link-text/
 */
const genericLinkText = [
  'click here',
  'click this',
  'go',
  'here',
  'this',
  'start',
  'right here',
  'more',
  'learn more',
];

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const Link = React.forwardRef<
HTMLAnchorElement,
React.ComponentProps<typeof LinkStyled>
& LinkProps
>(({
  children,
  href,
  target = '_self',
  external,
  refer = false,
  ...props
}, ref) => {
  /**
   * Get string values from component children.
   */
  const text = useChildrenText(children);

  /**
   * Throw an error if the text is too generic or empty.
   */
  React.useEffect(() => {
    if (!text.length) {
      throw new Error('The link must have inner text.');
    }
    if (genericLinkText.includes(text.toLowerCase())) {
      throw new Error(`The text "${text}" is too generic for links. Please use more descriptive text.`);
    }
  }, [children]);

  /**
   * Hook to fetch `window.location`.
   */
  const location = useLocation();

  /**
   * Determines if the href points to an external resource.
   */
  const isExternal = React.useMemo(() => {
    try {
      if (!href || !location) {
        return false;
      }
      const url = new URL(href);
      if (!url.hostname.length) {
        return false;
      }
      return location.hostname !== url.hostname;
    } catch (e) {
      return false;
    }
  }, [location, href]);

  return (
    <LinkStyled
      ref={ref}
      href={href}
      target={target}
      rel={refer ? 'noopener' : 'noreferrer'}
      tabIndex={0}
      {...props}
    >
      {children}
      {external === true || isExternal ? <Icon name="HiExternalLink" size="1em" /> : undefined}
    </LinkStyled>
  );
});

export default Link;
