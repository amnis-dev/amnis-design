---
to: "<%= styled ? `packages/amnis-${type}/src/${Name}/${Name}.styled.tsx` : null %>"
---
import styled, { CSSObject } from '@amnis/style/styled';
import { <%= Name %>Props } from './<%= Name %>.types';

export const <%= Name %>Styled = styled<HTMLDivElement>('div')<Partial<<%= Name %>Props>>(() => {
  const style: CSSObject = {

  };

  return style;
});

export default <%= Name %>Styled;
