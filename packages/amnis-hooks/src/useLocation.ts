import React from 'react';

/**
 * Hook description.
 */
export function useLocation(): Location | undefined {
  const [location, locationSet] = React.useState<Location | undefined>();

  React.useEffect(() => {
    locationSet(window.location);
  }, []);

  return location;
}

export default useLocation;
