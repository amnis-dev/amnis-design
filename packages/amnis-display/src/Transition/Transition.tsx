import { ThemeContext } from '@amnis/style/styled';
import type { Theme } from '@amnis/style/theme.types';
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
    },
  },
  scale: {
    active: {
      transform: 'scale(1)',
    },
    inactive: {
      transform: 'scale(0)',
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
};

/**
 * ## Transitional Animations
 * A component for applying transitions.
 */
export const Transition = React.forwardRef<
HTMLDivElement,
TransitionProps
>(({
  children,
  duration = 'normal',
  timing = 'easeInOut',
  variants = [],
  styleActive = {},
  styleInactive = {},
  active = false,
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
    () => (active ? styleActive : styleInactive),
    [styleActive, styleInactive],
  );

  return (
    <div
      ref={ref}
      style={{
        transition: `all ${durations[duration]} ${timings[timing]}`,
        display: 'inline-block',
        ...transitionStyles[active ? 'active' : 'inactive'],
        ...customStyle,
      }}
    >
      {children}
    </div>
  );
});

export default Transition;
