import { useState } from 'react';

/**
 * Counter for input ids
 */
let counter = 0;

/**
 * A hook for using incremental IDs for components.
 */
export function useIncrementalId(prefix = ''): string {
  const [id] = useState(counter++);

  return `${prefix}${id}`;
}

export default useIncrementalId;
