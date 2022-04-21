import Color from 'color';
import {
  Theme, BaseTheme, BaseThemeDefault, ThemePaint, ThemeShadowLevels, ThemeSurfaces,
} from './theme.types';
import { themeBaseDefault } from './themeBaseDefault';

/**
 * Text color constants.
 */
const lightTextColor = '#ffffff';
const darkTextColor = '#151515';

/**
 * Modifies the brightness of a color string.
 */
function modifyColorBrightness(color: string, amount: number, isLight: boolean) {
  return isLight ? Color(color).darken(amount).hex() : Color(color).lighten(amount).hex();
}

/**
 * Generates a theme paint.
 */
export function createThemePaint(
  backgroundColor: string,
  focusColor: string,
  themeIsLightType: boolean,
  modify?: 'lighten' | 'darken',
  linkColor?: string,
): ThemePaint {
  let baseColor = backgroundColor;

  switch (modify) {
    case 'lighten':
      baseColor = Color(baseColor).saturate(1).lighten(0.32).hex();
      break;
    case 'darken':
      baseColor = Color(baseColor).saturate(1).darken(0.32).hex();
      break;
    default:
  }

  const isLight = Color(baseColor).isLight();
  const color = isLight ? darkTextColor : lightTextColor;

  const baseLinkColor = linkColor || (
    isLight ? Color(baseColor).darken(1.5).hex() : Color(baseColor).lighten(1.5).hex()
  );

  const hoverColor = modifyColorBrightness(baseColor, 0.2, themeIsLightType);
  const activeColor = modifyColorBrightness(baseColor, 0.4, themeIsLightType);

  const hoverColorLink = modifyColorBrightness(baseLinkColor, 0.2, themeIsLightType);
  const activeColorLink = modifyColorBrightness(baseLinkColor, 0.4, themeIsLightType);

  return {

    neutral: {
      backgroundColor: baseColor,
      color,
      colorLink: Color(baseLinkColor).hex(),
    },

    hover: {
      backgroundColor: hoverColor,
      color: Color(hoverColor).isLight() ? darkTextColor : lightTextColor,
      colorLink: Color(hoverColorLink).hex(),
    },

    active: {
      backgroundColor: activeColor,
      color: Color(activeColor).isLight() ? darkTextColor : lightTextColor,
      colorLink: Color(activeColorLink).hex(),
    },

    focus: {
      backgroundColor: focusColor,
      color: Color(focusColor).isLight() ? darkTextColor : lightTextColor,
      colorLink: Color(focusColor).hex(),
    },
  };
}

/**
 * Creates the levels for shadows.
 */
export function createThemeShadowLevels(themeIsLightType: boolean): ThemeShadowLevels {
  const shadowColor = themeIsLightType ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.75)';

  return {
    0: 'none',
    1: `0 1px 4px 0 ${shadowColor}`,
    2: `0 4px 8px 0 ${shadowColor}`,
    3: `0 8px 16px 0 ${shadowColor}`,
    4: `0 12px 24px 0 ${shadowColor}`,
    5: `0 16px 32px 0 ${shadowColor}`,
    6: `0 18px 36px 0 ${shadowColor}`,
  };
}

const generator = (base: BaseTheme): Theme => {
  const merge = {
    ...themeBaseDefault,
    ...base,
    fonts: {
      main: {
        ...themeBaseDefault.fonts.main,
        ...base?.fonts?.main,
        heading: {
          ...themeBaseDefault.fonts.main.heading,
          ...base?.fonts?.main?.heading,
        },
        subtitle: {
          ...themeBaseDefault.fonts.main.subtitle,
          ...base?.fonts?.main?.subtitle,
        },
        body: {
          ...themeBaseDefault.fonts.main.body,
          ...base?.fonts?.main?.body,
        },
        logo: {
          ...themeBaseDefault.fonts.main.logo,
          ...base?.fonts?.main?.logo,
        },
        label: {
          ...themeBaseDefault.fonts.main.label,
          ...base?.fonts?.main?.label,
        },
        button: {
          ...themeBaseDefault.fonts.main.button,
          ...base?.fonts?.main?.button,
        },
        caption: {
          ...themeBaseDefault.fonts.main.caption,
          ...base?.fonts?.main?.caption,
        },
        overline: {
          ...themeBaseDefault.fonts.main.overline,
          ...base?.fonts?.main?.overline,
        },
      },
      prose: {
        ...themeBaseDefault.fonts.prose,
        ...base?.fonts?.prose,
        heading: {
          ...themeBaseDefault.fonts.prose.heading,
          ...base?.fonts?.prose?.heading,
        },
        subtitle: {
          ...themeBaseDefault.fonts.prose.subtitle,
          ...base?.fonts?.prose?.subtitle,
        },
        body: {
          ...themeBaseDefault.fonts.prose.body,
          ...base?.fonts?.prose?.body,
        },
        logo: {
          ...themeBaseDefault.fonts.prose.logo,
          ...base?.fonts?.prose?.logo,
        },
        label: {
          ...themeBaseDefault.fonts.prose.label,
          ...base?.fonts?.prose?.label,
        },
        button: {
          ...themeBaseDefault.fonts.prose.button,
          ...base?.fonts?.prose?.button,
        },
        caption: {
          ...themeBaseDefault.fonts.prose.caption,
          ...base?.fonts?.prose?.caption,
        },
        overline: {
          ...themeBaseDefault.fonts.prose.overline,
          ...base?.fonts?.prose?.overline,
        },
      },
    },
    spacing: {
      ...themeBaseDefault.spacing,
      ...base.spacing,
    },
    surfaces: {
      button: {
        ...themeBaseDefault.surfaces.button,
        ...base?.surfaces?.button,
      },
      input: {
        ...themeBaseDefault.surfaces.input,
        ...base?.surfaces?.input,
      },
      paper: {
        ...themeBaseDefault.surfaces.paper,
        ...base?.surfaces?.paper,
      },
    },
  } as BaseThemeDefault;

  const modeType = Color(merge.backgroundColor).isLight();
  const focusColor = Color(merge.primaryColor).saturate(2).hex();
  const theme: Theme = {
    name: merge.name,
    mode: modeType ? 'light' : 'dark',

    maxContentWidth: merge.maxContentWidth,

    fontImports: merge.fontImports,

    fonts: merge.fonts,

    paints: {
      main: createThemePaint(
        merge.backgroundColor,
        focusColor,
        modeType,
        undefined,
        merge.primaryColor,
      ),

      information: createThemePaint(merge.infoColor, focusColor, modeType),
      warning: createThemePaint(merge.warnColor, focusColor, modeType),
      danger: createThemePaint(merge.dangerColor, focusColor, modeType),
      positive: createThemePaint(merge.positiveColor, focusColor, modeType),

      primary: createThemePaint(merge.primaryColor, focusColor, modeType),
      primaryDark: createThemePaint(merge.primaryColor, focusColor, modeType, 'darken'),
      primaryLight: createThemePaint(merge.primaryColor, focusColor, modeType, 'lighten'),

      secondary: createThemePaint(merge.secondaryColor, focusColor, modeType),
      secondaryDark: createThemePaint(merge.secondaryColor, focusColor, modeType, 'darken'),
      secondaryLight: createThemePaint(merge.secondaryColor, focusColor, modeType, 'lighten'),

      cool: createThemePaint(merge.coolColor, focusColor, modeType),
      coolDark: createThemePaint(merge.coolColor, focusColor, modeType, 'darken'),
      coolLight: createThemePaint(merge.coolColor, focusColor, modeType, 'lighten'),

      warm: createThemePaint(merge.warmColor, focusColor, modeType),
      warmDark: createThemePaint(merge.warmColor, focusColor, modeType, 'darken'),
      warmLight: createThemePaint(merge.warmColor, focusColor, modeType, 'lighten'),

      base: createThemePaint(merge.baseColor, focusColor, modeType),
      baseDark: createThemePaint(merge.baseColor, focusColor, modeType, 'darken'),
      baseLight: createThemePaint(merge.baseColor, focusColor, modeType, 'lighten'),
    },

    disabled: {
      backgroundColor: '#888888',
      color: '#ffffff',
      opacity: 0.5,
      pointerEvents: 'none',
    },

    surfaces: merge.surfaces as ThemeSurfaces,

    shadow: createThemeShadowLevels(modeType),
    spacing: merge.spacing,

    pseudoQueries: {
      hover: '&:hover',
      active: '&:active',
      focus: '&:not([disabled]):focus',
      disabled: '&:disabled',
    },

    mediaQueries: {
      phone: '@media (max-width: 600px)',
      mobile: '@media (max-width: 768px)',
      tablet: '@media (max-width: 1024px)',
    },

    transitions: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },

    durations: {
      short: '200ms',
      normal: '350ms',
      complex: '640ms',
    },

  };

  return theme;
};

export default generator;
