import React from 'react';
import useWindowSize from './useWindowSize';

/**
 * Gets the bounding client rect from a component reference.
 */
export function useBoundingClientRect<T extends HTMLElement = HTMLElement>(
  ref?: React.RefObject<T> | null,
): DOMRect {
  const [rect, rectSet] = React.useState<DOMRect>(
    ref?.current?.getBoundingClientRect() || {
      top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0,
    } as DOMRect,
  );

  const handleResize = React.useCallback(() => {
    if (!ref?.current) {
      return;
    }

    rectSet(ref.current.getBoundingClientRect());
  }, [ref]);

  const windowSize = useWindowSize();

  React.useLayoutEffect(() => {
    const element = ref?.current;
    if (!element) return () => { /** do nothing */ };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(element);

    return () => {
      resizeObserver?.disconnect();
    };
  }, [ref?.current, windowSize]);

  return rect;
}

export default useBoundingClientRect;
