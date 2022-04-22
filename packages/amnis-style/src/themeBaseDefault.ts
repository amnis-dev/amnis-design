import type { BaseThemeDefault } from './theme.types';

/**
 * Default theme properties
 */
export const themeBaseDefault: BaseThemeDefault = {
  name: 'Default theme',

  maxContentWidth: '80rem',

  fontImports: [
    'https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;400;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
  ],

  fonts: {
    main: {
      fontFamily: 'Public Sans,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
      fontSize: '1.06rem',
      heading: {
        fontSize: '2.4em',
      },
      subtitle: {
        fontSize: '1.1em',
      },
      body: {
        fontSize: '1em',
      },
      logo: {
        fontSize: '2em',
      },
      label: {
        fontSize: '1em',
      },
      button: {
        fontSize: '0.92em',
        textTransform: 'uppercase',
        fontWeight: 400,
      },
      caption: {
        fontSize: '0.9em',
      },
      overline: {
        fontSize: '0.95em',
      },
    },
    prose: {
      fontFamily: 'Merriweather, Arial, sans-serif',
      fontSize: '1.06rem',
      heading: {
        fontSize: '2em',
      },
      subtitle: {
        fontSize: '1.2em',
      },
      body: {
        fontSize: '1em',
      },
      logo: {
        fontSize: '2em',
      },
      label: {
        fontSize: '1em',
      },
      button: {
        fontSize: '1.1em',
      },
      caption: {
        fontSize: '0.9em',
      },
      overline: {
        fontSize: '0.95em',
      },
    },
  },

  backgroundColor: '#ffffff',

  infoColor: '#00bde3',
  warnColor: '#ffbe2e',
  dangerColor: '#b50909',
  positiveColor: '#00a91c',

  primaryColor: '#005ea2',
  secondaryColor: '#c9342e',
  coolColor: '#00bde3',
  warmColor: '#fa9441',
  baseColor: '#cfcfcf',

  spacing: {
    0: '0em',
    1: '.25em',
    2: '.5em',
    3: '.75em',
    4: '1em',
    5: '1.5em',
    6: '2em',
    7: '2.5em',
  },

  surfaces: {
    button: {
      boxShadow: '1px 1px 2px 0 #00000055',
      borderRadius: '.5em',
    },
    input: {
      border: '1px solid #88888888',
      borderRadius: '0',
      boxShadow: 'inset 1px 1px 1px 0 #00000088',
      backgroundColor: '#ffffff',
      color: '#202020',
    },
    paper: {
      borderRadius: '.5em',
      boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.4)',
    },
  },

  states: {
    disabled: {
      backgroundColor: '#888888',
      color: '#ffffff',
      opacity: 0.5,
      pointerEvents: 'none',
    },
  },
};

export default themeBaseDefault;
