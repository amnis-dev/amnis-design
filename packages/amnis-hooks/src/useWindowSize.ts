import React from 'react';

interface WindowSize {
  width: number;
  height: number;
}

function getWindowSize(): WindowSize {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowSize(): WindowSize {
  const [windowSize, windowSizeSet] = React.useState(getWindowSize());

  React.useEffect(() => {
    function handleResize() {
      windowSizeSet(getWindowSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
