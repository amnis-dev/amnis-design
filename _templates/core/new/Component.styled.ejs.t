---
to: packages/amnis-core/src/<%= Name %>/<%= Name %>.styled.tsx
---
import styled, { CSSObject } from '@amnis/style/styled';
import { <%= Name %>Props } from './<%= Name %>.types';

export const <%= Name %>Styled = styled<HTMLDivElement>('div')<Partial<<%= Name %>Props>>(() => {
  const style: CSSObject = {

  };

  return style;
});

export default <%= Name %>Styled;
