import type { CSSProperties } from 'react';

/* eslint-disable @typescript-eslint/ban-ts-comment */

export interface ThemeFont {
  fontFamily: CSSProperties['fontFamily'];
  fontSize: CSSProperties['fontSize'];
  readonly heading: CSSProperties;
  readonly subtitle: CSSProperties;
  readonly body: CSSProperties;
  readonly logo: CSSProperties;
  readonly label: CSSProperties;
  readonly button: CSSProperties;
  readonly caption: CSSProperties;
  readonly overline: CSSProperties;
}

export interface ThemeFonts {
  readonly main: ThemeFont;
  readonly prose: ThemeFont;
}

export interface ThemeSurfaces {
  readonly button: CSSProperties;
  readonly input: CSSProperties;
  readonly paper: CSSProperties;
}

export interface ThemeShapes {
  readonly square: CSSProperties;
  readonly circle: CSSProperties;
}

export interface ThemeStates {
  readonly disabled: CSSProperties;
}

export interface ThemePaintStyle {
  readonly backgroundColor: string;
  readonly color: string;
  readonly colorLink: string;
}

export interface ThemePaint {
  readonly neutral: ThemePaintStyle;
  readonly hover: ThemePaintStyle;
  readonly active: ThemePaintStyle;
  readonly focus: ThemePaintStyle;
}

export interface ThemePaints {
  readonly main: ThemePaint;

  readonly information: ThemePaint;
  readonly warning: ThemePaint;
  readonly danger: ThemePaint;
  readonly positive: ThemePaint;

  readonly primary: ThemePaint;
  readonly primaryLight: ThemePaint;
  readonly primaryDark: ThemePaint;

  readonly secondary: ThemePaint;
  readonly secondaryLight: ThemePaint;
  readonly secondaryDark: ThemePaint;

  readonly cool: ThemePaint;
  readonly coolLight: ThemePaint;
  readonly coolDark: ThemePaint;

  readonly warm: ThemePaint;
  readonly warmLight: ThemePaint;
  readonly warmDark: ThemePaint;

  readonly base: ThemePaint;
  readonly baseLight: ThemePaint;
  readonly baseDark: ThemePaint;
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

export interface ThemePseudoQueries {
  readonly hover: string;
  readonly active: string;
  readonly focus: string;
  readonly disabled: string;
}

export interface ThemeMediaQueries {
  readonly phone: string;
  readonly mobile: string;
  readonly tablet: string;
}

export interface ThemeTransitions {
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
export type ThemeTransitionOptions = Extract<keyof ThemeTransitions, string>;
export type ThemeDurationOptions = Extract<keyof ThemeDurations, string>;
export type ThemeFontOptions = Extract<keyof ThemeFont, string>;
export type ThemeSurfaceOptions = Extract<keyof ThemeSurfaces, string>;
export type ThemeShapeOptions = Extract<keyof ThemeShapes, string>;
export type ThemeStateOptions = Extract<keyof ThemeStates, string>;

export interface BaseThemeDefault {
  /**
   * Name of the theme.
   */
  name: string;

  /**
   * The content max-widths of template sections.
   */
  maxContentWidth: string;

  /**
   * Array of fonts to import.
   * The string should be a url to the css that defines the font faces.
   * For example, this imports from Google Fonts: https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap
   */
  fontImports: string[];

  /**
   * Font styles
   */
  fonts: ThemeFonts;

  backgroundColor: string;
  accentColor?: string;

  infoColor: string;
  warnColor: string;
  dangerColor: string;
  positiveColor: string;

  primaryColor: string;
  secondaryColor: string;
  coolColor: string;
  warmColor: string;
  baseColor: string;

  spacing: ThemeSpacingLevels;

  surfaces: ThemeSurfaces;
  shapes: ThemeShapes;
  states: ThemeStates;
}

export interface BaseTheme extends Partial<Omit<BaseThemeDefault, 'spacing' | 'surfaces' | 'shapes' | 'states'>> {
  spacing?: Partial<ThemeSpacingLevels>;
  surfaces?: Partial<ThemeSurfaces>;
  shapes?: Partial<ThemeShapes>;
  states?: Partial<ThemeStates>;
}

export interface Theme {
  readonly name: string;
  readonly mode: 'light' | 'dark';

  readonly maxContentWidth: string;

  readonly fontImports: string[];
  readonly fonts: ThemeFonts;

  readonly paints: ThemePaints;

  readonly surfaces: ThemeSurfaces;

  readonly shapes: ThemeShapes;

  readonly states: ThemeStates;

  readonly shadow: ThemeShadowLevels;

  readonly spacing: ThemeSpacingLevels;

  readonly pseudoQueries: ThemePseudoQueries;

  readonly mediaQueries: ThemeMediaQueries;

  readonly transitions: ThemeTransitions;

  readonly durations: ThemeDurations;
}

export interface ThemeProps {
  theme: Theme;
}
