import { ThemeContext } from '@amnis/style/styled';
import type { Theme } from '@amnis/style/theme.types';
import { Box } from '@amnis/layout/Box';
import React from 'react';
import type { TransitionProps, TransitionVariant } from './Transition.types';

interface TransitionStyles {
  inactive: React.CSSProperties,
  active: React.CSSProperties
}

const transitionCSS: Record<TransitionVariant, TransitionStyles> = {
  fade: {
    active: {
      opacity: 1,
    },
    inactive: {
      opacity: 0,
      visibility: 'hidden',
    },
  },
  scale: {
    active: {
      transform: 'scale(1)',
    },
    inactive: {
      transform: 'scale(0)',
      visibility: 'hidden',
    },
  },
  scaleHalf: {
    active: {
      transform: 'scale(1)',
    },
    inactive: {
      transform: 'scale(0.5)',
    },
  },
  scaleQuarter: {
    active: {
      transform: 'scale(1)',
    },
    inactive: {
      transform: 'scale(0.75)',
    },
  },
  spin: {
    active: {
      transform: 'rotate(0deg)',
    },
    inactive: {
      transform: 'rotate(360deg)',
    },
  },
  spinHalf: {
    active: {
      transform: 'rotate(0deg)',
    },
    inactive: {
      transform: 'rotate(180deg)',
    },
  },
  spinQuarter: {
    active: {
      transform: 'rotate(0deg)',
    },
    inactive: {
      transform: 'rotate(90deg)',
    },
  },
};

/**
 * ## Transitional Animations
 * A component for applying transitions.
 */
export const Transition = React.forwardRef<
HTMLDivElement,
React.ComponentProps<typeof Box>
& TransitionProps
>(({
  children,
  display,
  duration = 'normal',
  timing = 'easeInOut',
  variants = [],
  styleActive = {},
  styleInactive = {},
  active = false,
  style = {},
  ...props
}, ref) => {
  const { durations, timings } = React.useContext(ThemeContext) as Theme;

  const transitionStyles = React.useMemo<TransitionStyles>(() => {
    const value = variants.reduce<TransitionStyles>((acc, curr) => {
      acc.active = {
        ...acc.active,
        ...transitionCSS[curr].active,
        transform: transitionCSS[curr].active.transform
          ? `${acc.active.transform} ${transitionCSS[curr].active.transform}`
          : acc.active.transform,
      };
      acc.inactive = {
        ...acc.inactive,
        ...transitionCSS[curr].inactive,
        transform: transitionCSS[curr].inactive.transform
          ? `${acc.inactive.transform} ${transitionCSS[curr].inactive.transform}`
          : acc.inactive.transform,
      };
      return acc;
    }, {
      active: {
        transform: '',
      },
      inactive: {
        transform: '',
      },
    });

    return value;
  }, [variants]);

  const customStyle = React.useMemo<React.CSSProperties>(
    () => (active ? { ...styleActive } : { ...styleInactive }),
    [styleActive, styleInactive, active],
  );

  return (
    <Box
      ref={ref}
      aria-hidden={!!transitionStyles[active ? 'active' : 'inactive'].visibility}
      display={display || 'inline-block'}
      style={{
        transition: `all ${durations ? durations[duration] : '350ms'} ${timings ? timings[timing] : 'cubic-bezier(0.4, 0, 0.2, 1)'}`,
        ...transitionStyles[active ? 'active' : 'inactive'],
        ...customStyle,
        ...style,
      }}
      {...props}
    >
      {children}
    </Box>
  );
});

export default Transition;
