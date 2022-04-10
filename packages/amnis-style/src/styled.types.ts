import type { CSSObject as EmotionCSSObject } from '@emotion/styled';
import type { Theme as LibTheme } from './theme.types';

export type CSSObject = EmotionCSSObject;

export type StylerMethod<P> = (props: { theme: LibTheme } & P) => EmotionCSSObject;
