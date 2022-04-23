import React from 'react';

/**
 * Extracts text from React's children object.
 */
export function useChildrenText(children: React.ReactNode): string {
  const text = React.useMemo<string>(() => {
    let childrenText = '';
    React.Children.map(children, (child) => {
      if (typeof child === 'string') {
        childrenText += child;
      }
    });
    return childrenText;
  }, [children]);

  return text;
}

export default useChildrenText;
