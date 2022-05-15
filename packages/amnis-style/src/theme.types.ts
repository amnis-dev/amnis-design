import type { CSSProperties } from 'react';

type CSSProp = Readonly<CSSProperties>;

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export interface ThemeFont {
  fontFamily: CSSProp['fontFamily'];
  fontSize: CSSProp['fontSize'];
  readonly heading: CSSProp;
  readonly subtitle: CSSProp;
  readonly body: CSSProp;
  readonly logo: CSSProp;
  readonly label: CSSProp;
  readonly button: CSSProp;
  readonly caption: CSSProp;
  readonly overline: CSSProp;
  readonly link: CSSProp;
}

export interface ThemeFonts {
  readonly main: ThemeFont;
  readonly prose: ThemeFont;
}

export interface ThemeStates {
  readonly base: CSSProp;
  readonly hover: CSSProp;
  readonly active: CSSProp;
  readonly focus: CSSProp;
  readonly disabled: CSSProp;
}

export interface ThemeSurfaces {
  readonly button: ThemeStates;
  readonly input: ThemeStates;
  readonly paper: ThemeStates;
  readonly overlay: ThemeStates;
}

export interface ThemeShapes {
  readonly rectangle: CSSProp;
  readonly square: CSSProp;
  readonly circle: CSSProp;
}

export interface ThemePseudoQueries {
  readonly hover: string;
  readonly active: string;
  readonly focus: string;
  readonly disabled: string;
}

export interface ThemeSeparators {
  readonly basic: CSSProp;
  readonly thematic: CSSProp;
}

export interface ThemePaint extends Omit<CSSProp, 'backgroundColor' | 'color'> {
  readonly backgroundColor: string;
  readonly color: string;
}

export interface ThemePaints {
  readonly main: ThemePaint;

  readonly information: ThemePaint;
  readonly warning: ThemePaint;
  readonly danger: ThemePaint;
  readonly positive: ThemePaint;

  readonly primary: ThemePaint;
  readonly secondary: ThemePaint;
  readonly cool: ThemePaint;
  readonly warm: ThemePaint;
  readonly base: ThemePaint;
}

export interface ThemeShadowLevels {
  readonly 0: string;
  readonly 1: string;
  readonly 2: string;
  readonly 3: string;
  readonly 4: string;
  readonly 5: string;
  readonly 6: string;
}

export interface ThemeSpacingLevels {
  readonly 0: string | number;
  readonly 1: string | number;
  readonly 2: string | number;
  readonly 3: string | number;
  readonly 4: string | number;
  readonly 5: string | number;
  readonly 6: string | number;
  readonly 7: string | number;
}

export interface ThemeColumnWidths {
  readonly 0: string;
  readonly 1: string;
  readonly 2: string;
  readonly 3: string;
  readonly 4: string;
  readonly 5: string;
  readonly 6: string;
  readonly 7: string;
  readonly 8: string;
  readonly 9: string;
  readonly 10: string;
  readonly 11: string;
  readonly 12: string;
}

export interface ThemeMediaQueries {
  readonly phone: string;
  readonly mobile: string;
  readonly tablet: string;
}

export interface ThemeTimings {
  readonly easeInOut: string;
  readonly easeOut: string;
  readonly easeIn: string;
  readonly sharp: string;
}

export interface ThemeDurations {
  readonly short: string,
  readonly normal: string,
  readonly complex: string
}

export type ThemeShadowLevelOptions = Extract<keyof ThemeShadowLevels, number>;
export type ThemeSpacingLevelOptions = Extract<keyof ThemeSpacingLevels, number>;
export type ThemeColumnWidthOptions = Extract<keyof ThemeColumnWidths, number>;
export type ThemePaintOptions = Extract<keyof ThemePaints, string>;
export type ThemeMediaQueryOptions = Extract<keyof ThemeMediaQueries, string>;
export type ThemeTimingOptions = Extract<keyof ThemeTimings, string>;
export type ThemeDurationOptions = Extract<keyof ThemeDurations, string>;
export type ThemeFontOptions = Extract<keyof ThemeFont, string>;
export type ThemeSurfaceOptions = Extract<keyof ThemeSurfaces, string>;
export type ThemeShapeOptions = Extract<keyof ThemeShapes, string>;
// export type ThemeStateOptions = Extract<keyof ThemeStates, string>;
export type ThemeSeparatorOptions = Extract<keyof ThemeSeparators, string>;

export interface Theme {
  readonly name: string;
  readonly mode: 'light' | 'dark';

  readonly maxContentWidth: string;

  readonly fontImports: string[];
  readonly fonts: ThemeFonts;

  readonly paints: ThemePaints;

  readonly surfaces: ThemeSurfaces;

  readonly states: ThemeStates;

  readonly shapes: ThemeShapes;

  readonly separators: ThemeSeparators;

  readonly shadow: ThemeShadowLevels;

  readonly spacing: ThemeSpacingLevels;

  readonly pseudoQueries: ThemePseudoQueries;

  readonly mediaQueries: ThemeMediaQueries;

  readonly timings: ThemeTimings;

  readonly durations: ThemeDurations;
}

export type ThemeBase = RecursivePartial<Theme>;

export interface ThemeProps {
  theme: Theme;
}
