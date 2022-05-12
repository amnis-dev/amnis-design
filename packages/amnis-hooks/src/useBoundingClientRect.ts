import React from 'react';

/**
 * Gets the bounding client rect from a component reference.
 */
export function useBoundingClientRect<T extends HTMLElement = HTMLElement>(
  ref?: React.RefObject<T> | null,
): DOMRect {
  const [rect, rectSet] = React.useState<DOMRect>(
    ref?.current?.getBoundingClientRect() || new DOMRect(),
  );

  const handleResize = React.useCallback(() => {
    if (!ref?.current) {
      return;
    }

    rectSet(ref.current.getBoundingClientRect());
  }, [ref]);

  React.useLayoutEffect(() => {
    const element = ref?.current;
    if (!element) return () => { /** do nothing */ };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(element);

    return () => {
      resizeObserver?.disconnect();
    };
  }, [ref?.current]);

  return rect;
}

export default useBoundingClientRect;
