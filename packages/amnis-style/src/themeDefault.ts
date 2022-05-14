import type { Theme } from './theme.types';

/**
 * Default theme properties
 */
export const themeDefault: Theme = {
  name: 'Default theme',
  mode: 'light',

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
      link: {
        fontSize: 'inherit',
        textDecoration: 'underline',
        cursor: 'pointer',
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
      link: {
        fontSize: 'inherit',
        textDecoration: 'underline',
      },
    },
  },

  paints: {
    main: {
      backgroundColor: '#ffffff',
      color: '#151515',
    },

    information: {
      backgroundColor: '#00bde3',
      color: '#151515',
    },
    warning: {
      backgroundColor: '#ffbe2e',
      color: '#151515',
    },
    danger: {
      backgroundColor: '#b50909',
      color: '#151515',
    },
    positive: {
      backgroundColor: '#00a91c',
      color: '#151515',
    },

    primary: {
      backgroundColor: '#005ea2',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: '#c9342e',
      color: '#ffffff',
    },
    cool: {
      backgroundColor: '#00bde3',
      color: '#151515',
    },
    warm: {
      backgroundColor: '#fa9441',
      color: '#151515',
    },
    base: {
      backgroundColor: '#cfcfcf',
      color: '#151515',
    },
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
      backgroundColor: '#f8f8f8',
    },
    overlay: {
      backgroundColor: '#00000088',
      backdropFilter: 'blur(2px)',
    },
  },

  shapes: {
    rectangle: {
      borderRadius: '.5em',
    },
    square: {},
    circle: {
      borderRadius: '50%',
      aspectRatio: '1 / 1',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  states: {
    focused: {
      outlineOffset: '.2rem',
      outline: '.25rem solid #219cde',
    },
    disabled: {
      backgroundColor: '#888888',
      color: '#ffffff',
      opacity: 0.7,
      pointerEvents: 'none',
      cursor: 'unset',
      MozOsxFontSmoothing: 'antialiased',
      WebkitFontSmoothing: 'antialiased',
      boxShadow: 'none',
    },
  },

  separators: {
    basic: {
      border: 0,
      height: 1,
      backgroundColor: '#aaa',
      backgroundImage: 'linear-gradient(to right, #aaa, #000, #aaa)',
    },
    thematic: {
      border: 0,
      height: 1,
      backgroundColor: '#aaa',
      backgroundImage: 'linear-gradient(to right, #aaa, #000, #aaa)',
    },
  },

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

  shadow: {
    0: 'none',
    1: '0 1px 4px 0 rgba(0, 0, 0, 0.4)',
    2: '0 4px 8px 0 rgba(0, 0, 0, 0.4)',
    3: '0 8px 16px 0 rgba(0, 0, 0, 0.4)',
    4: '0 12px 24px 0 rgba(0, 0, 0, 0.4)',
    5: '0 16px 32px 0 rgba(0, 0, 0, 0.4)',
    6: '0 18px 36px 0 rgba(0, 0, 0, 0.4)',
  },

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

  timings: {
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

export default themeDefault;
