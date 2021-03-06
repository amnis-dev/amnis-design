import styled, { CSSObject } from '@amnis/style/styled';

export const EntryInputStyled = styled<HTMLInputElement>('input')(({
  theme,
}) => {
  const { fonts, paints, pseudoQueries } = theme;

  const style: CSSObject = {
    fontFamily: fonts.main.fontFamily,
    fontSize: fonts.main.fontSize,
    color: `${paints.main.color}ee`,
    border: 'none',
    borderRadius: 0,
    backgroundColor: 'transparent',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    lineHeight: 1.55,
    width: '100%',
    height: 'auto',

    [pseudoQueries.focus]: {
      outline: 'none',
    },
  };

  return style;
});

export default EntryInputStyled;
