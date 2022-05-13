import React from 'react';
import type { LoaderEllipsesProps } from './LoaderEllipses.types';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const LoaderEllipses = React.forwardRef<
HTMLSpanElement,
LoaderEllipsesProps
>(({
  size = '0.8em',
  duration = 0.7,
}, ref) => {
  const width = '3.5em';
  const height = '1em';
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
        <circle id="c1" cx={`calc(${height} / 2)`} cy="50%" r={`calc(${height} / 2)`} fill={color} />
        <circle id="c2" cx="50%" cy="50%" r={`calc(${height} / 2)`} fill={color} />
        <circle id="c3" cx={`calc(100% - ${height} / 2)`} cy="50%" r={`calc(${height} / 2)`} fill={color} />
        <animate xlinkHref="#c1" attributeName="r" values={`calc(${height} / 3); calc(${height} / 2); calc(${height} / 3)`} dur={dur} repeatCount="indefinite" />
        <animate xlinkHref="#c2" attributeName="r" values={`calc(${height} / 2); calc(${height} / 3); calc(${height} / 2)`} dur={dur} repeatCount="indefinite" />
        <animate xlinkHref="#c3" attributeName="r" values={`calc(${height} / 3); calc(${height} / 2); calc(${height} / 3)`} dur={dur} repeatCount="indefinite" />
      </svg>
    </span>
  );
});

export default LoaderEllipses;
