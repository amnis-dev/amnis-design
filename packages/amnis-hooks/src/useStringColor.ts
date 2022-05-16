/* eslint-disable no-bitwise */
import React from 'react';

/**
 * Generates a color based on a string.
 */
export function useStringColor(
  text = 'empty',
): string {
  const color = React.useMemo(() => {
    let hash = 0;

    for (let i = 0; i < text.length; i += 1) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }

    let hexColor = '#';

    for (let i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      hexColor += `00${value.toString(16)}`.slice(-2);
    }

    return hexColor;
  }, [text]);

  return color;
}

export default useStringColor;
