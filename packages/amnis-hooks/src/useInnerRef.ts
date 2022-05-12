/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

/**
 * Copies a reference to be used internally in a component.
 */
export function useInnerRef<T>(ref: React.Ref<T>): React.RefObject<T> {
  const innerRef = React.useRef(null);

  React.useEffect(() => {
    if (!ref) return;

    if (typeof ref === 'function') {
      ref(innerRef.current);
    } else {
      /** @ts-ignore */
      ref.current = innerRef.current;
    }
  }, [ref]);

  return innerRef;
}

export default useInnerRef;
