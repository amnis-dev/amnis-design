import React from 'react';
import type { LoaderSpinProps } from './LoaderSpin.types';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const LoaderSpin = React.forwardRef<
HTMLSpanElement,
LoaderSpinProps
>(({
  size = '2em',
  duration = 1,
  thickness = '0.2em',
}, ref) => {
  const width = '1.2em';
  const height = '1.2em';
  const strokeWidth = thickness;
  const dur = `${duration}s`;
  const color = 'currentColor';

  return (
    <span
      ref={ref}
      style={{
        fontSize: size,
        lineHeight: 0,
      }}
    >
      <svg
        width={width}
        height={height}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask id="mask">
          <rect width="100%" height="100%" fill="white" />
          <rect x="calc(50% - 25% / 2)" width="25%" height="150%" fill="black" style={{ transformOrigin: 'center' }}>
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0"
              to="360"
              dur={dur}
              repeatCount="indefinite"
            />
          </rect>
        </mask>
        <circle id="c" mask="url(#mask)" cx="50%" cy="50%" r={`calc(50% - ${strokeWidth} / 2)`} stroke={color} strokeWidth={strokeWidth} fill="transparent" />
      </svg>
    </span>
  );
});

export default LoaderSpin;
