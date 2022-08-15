import styled, { CSSObject } from '@amnis/style/styled';
import type { ProseProps } from './Prose.types';

export const ProseStyled = styled<HTMLDivElement>('div')<Partial<ProseProps>>(({
  theme,
}) => {
  const { fonts } = theme;
  const {
    fontFamily, fontSize, heading, body, link,
  } = fonts.prose;

  const headingSize = fonts.prose.heading.fontSize || '2em';

  const style: CSSObject = {
    fontFamily,
    fontSize,
    margin: 0,
    padding: 0,
    border: 'none',

    '& *': {
      fontFamily: 'inherit',
    },

    '& h1': {
      ...heading,
      fontSize: `calc(${headingSize} - ${headingSize} / 7 * 0)`,
    },
    '& h2': {
      ...heading,
      fontSize: `calc(${headingSize} - ${headingSize} / 7 * 1)`,
    },
    '& h3': {
      ...heading,
      fontSize: `calc(${headingSize} - ${headingSize} / 7 * 2)`,
    },
    '& h4': {
      ...heading,
      fontSize: `calc(${headingSize} - ${headingSize} / 7 * 3)`,
    },
    '& h5': {
      ...heading,
      fontSize: `calc(${headingSize} - ${headingSize} / 7 * 4)`,
    },
    '& h6': {
      ...heading,
      fontSize: `calc(${headingSize} - ${headingSize} / 7 * 5)`,
    },
    '& p': {
      ...body,
    },
    '& a': {
      ...link,
    },
  };

  return style;
});

export default ProseStyled;
