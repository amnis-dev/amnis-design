/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { withTheme, ClassNames, ThemeContext as EmotionThemeContext } from '@emotion/react';
import styled, { CSSObject as EmotionCSSObject } from '@emotion/styled';
import defaultTheme from './themeLight';
import { Theme as LibTheme } from './theme.types';

export const styledDefaultTheme = defaultTheme;

export const ThemeContext = EmotionThemeContext;

export type CSSObject = EmotionCSSObject;

export type StylerMethod<P> = (props: { theme: LibTheme } & P) => EmotionCSSObject;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function styledWrapper<
  T extends HTMLElement
>(component: keyof React.ReactHTML | React.FC, as?: keyof React.ReactHTML) {
  // @ts-nocheck
  /* @ts-ignore */
  function generator<P = Record<string, unknown>>(styler: StylerMethod<P>) {
    // @ts-nocheck
    const StyledComponent = styled(component as keyof React.ReactHTML)<P>(styler) as Function;

    const ReactComponent = React.forwardRef<
    T,
    Omit<React.HTMLProps<T>, 'css' | keyof P>
    & P
    & { sx?:(arg0: LibTheme) => CSSObject, theme?: LibTheme }
    >(({
        sx,
        theme,
        ...props
      }, ref) => {
        const finalTheme = theme?.mode ? theme : defaultTheme;

        return (sx ? (
          <ClassNames>
            {({ css }) => (
            /* @ts-ignore */
              <StyledComponent
                ref={ref}
                theme={finalTheme}
                className={css(sx(finalTheme))}
                as={as}
                {...props}
              />
            )}
          </ClassNames>
        ) : (
        /* @ts-ignore */
          <StyledComponent ref={ref} theme={finalTheme} as={as} {...props} />
        ));
      });

    return withTheme(ReactComponent);
  }

  return generator;
}
