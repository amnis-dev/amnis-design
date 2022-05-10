import styled, { CSSObject } from '@amnis/style/styled';
import type { LinkProps } from './Link.types';
import { InteractiveStyled } from '../Interactive/Interactive.styled';

export const LinkStyled = styled<HTMLAnchorElement>(InteractiveStyled, 'a')<Partial<LinkProps>>(({
  theme,
}) => {
  const { fonts } = theme;

  const style: CSSObject = {
    ...fonts.main.link,
    display: 'inline-block',
    color: 'inherit',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
    '& > svg': {
      position: 'relative',
      verticalAlign: 'middle',
      left: '0.05em',
      bottom: '0.075em',
    },
  };

  return style;
});

export default LinkStyled;
