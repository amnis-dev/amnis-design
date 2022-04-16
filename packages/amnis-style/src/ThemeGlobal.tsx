import React from 'react';
import { Global, css, useTheme } from '@emotion/react';
import './theme.emotion';

export const GlobalStyles: React.FC<{ root: boolean }> = ({ root }) => {
  const theme = useTheme();

  return (
    <Global styles={css`
    ${theme.fontImports.map((fontUrl) => `@import url('${fontUrl}');`).join('\n')}

    html {
      line-height: 1.15;
      -webkit-text-size-adjust: 100%;
    }

    body {
      ${root ? `background-color: ${theme.paints.main.neutral.backgroundColor};` : ''}
      font-family: ${theme.fonts.main.fontFamily};
      font-size: ${theme.fonts.main.fontSize};
      color: ${theme.paints.main.neutral.color};
      margin: 0;
    }

    div, button, input, select, ul, li, ol, span, p {
      font-family: ${theme.fonts.main.fontFamily};
      font-size: ${theme.fonts.main.fontSize};
    }

    @keyframes amnis-fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes amnis-fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    @keyframes amnis-bounce {
      from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
      }
    
      40%, 43% {
        transform: translate3d(0, -30px, 0);
      }
    
      70% {
        transform: translate3d(0, -15px, 0);
      }
    
      90% {
        transform: translate3d(0,-4px,0);
      }
    }

    @keyframes amnis-skeletonPulse {
      0% {
        filter: brightness(1);
      }
  
      50% {
        filter: brightness(1.06);
      }

      100% {
        filter: brightness(1);
      }
    }

    @keyframes amnis-skeletonShine {
      0% {
        background-position: -100vw
      }
  
      100% {
        background-position: 200vw
      }
    }
  `}
    />
  );
};

export default GlobalStyles;
