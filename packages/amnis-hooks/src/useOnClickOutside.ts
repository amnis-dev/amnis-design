import { RefObject } from 'react';

import { useEventListener } from './useEventListener';

type Handler = (event: MouseEvent) => void

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: (RefObject<T> | undefined)| (RefObject<T> | undefined)[],
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
  useEventListener(mouseEvent, (event) => {
    if (Array.isArray(ref)) {
      for (let i = 0; i < ref.length; i += 1) {
        const el = ref[i]?.current;

        if (!el || el.contains(event.target as Node)) {
          return;
        }
      }

      handler(event);
    } else {
      const el = ref?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    }
  });
}

export default useOnClickOutside;
