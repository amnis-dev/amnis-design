import '@emotion/react';

/* eslint-disable @typescript-eslint/ban-ts-comment */
export interface ThemeFont {
  readonly fontFamily: string;
  readonly fontSize: string | number;
}

export interface ThemeFonts {
  readonly main: ThemeFont;
  readonly logo: ThemeFont;
  readonly prose: ThemeFont;
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

export interface ThemeDisabledOptions {
  readonly backgroundColor: string,
  readonly color: string,
  readonly opacity: number,
  readonly pointerEvents: 'none'
}

export interface ThemeInputOptions {
  readonly backgroundColor: string;
  readonly opacity: number;
  readonly borderRadius: string;
}

export interface ThemeButtonOptions {
  readonly opacity: number;
  readonly borderRadius: string;
}

export interface ThemePaperOptions {
  readonly opacity: number;
  readonly borderRadius: string;
}

export type ThemeShadowLevelOptions = Extract<keyof ThemeShadowLevels, number>;
export type ThemeSpacingLevelOptions = Extract<keyof ThemeSpacingLevels, number>;
export type ThemePaintOptions = Extract<keyof ThemePaints, string>;
export type ThemeMediaQueryOptions = Extract<keyof ThemeMediaQueries, string>;
export type ThemeTransitionOptions = Extract<keyof ThemeTransitions, string>;
export type ThemeDurationOptions = Extract<keyof ThemeDurations, string>;

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
   * The default font family for the entire theme.
   */
  fontFamily: string;
  /**
   * The default font size for the entire theme.
   */
  fontSize: string;

  /**
   * Font family to use for components that contain Logos.
   */
  fontFamilyLogo: string;
  /**
   * The font size for components that contain Logos.
   */
  fontSizeLogo: string;

  /**
   * Font family to use for a block of running text.
   * See the Prose component.
   */
  fontFamilyProse: string;
  /**
   * Font family to use for a block of running text.
   * See the Prose component.
   */
  fontSizeProse: string;

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

  borderWidth: string;
  borderRadius: string;
  inputBorderRadius: string;
  buttonBorderRadius: string;
  paperBorderRadius: string;
}

export interface BaseTheme extends Partial<Omit<BaseThemeDefault, 'spacing'>> {
  spacing?: Partial<ThemeSpacingLevels>;
}

export interface Theme {
  readonly name: string;
  readonly type: 'light' | 'dark';

  readonly maxContentWidth: string;

  readonly fontImports: string[];
  readonly fonts: ThemeFonts;

  readonly paints: ThemePaints;

  readonly disabled: ThemeDisabledOptions;
  readonly button: ThemeButtonOptions;
  readonly input: ThemeInputOptions;
  readonly paper: ThemePaperOptions;

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
