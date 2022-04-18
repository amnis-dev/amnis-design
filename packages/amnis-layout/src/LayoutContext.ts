import React from 'react';

export interface LayoutContextType {
  gap: string | number;
}

export const layoutContextDefault: LayoutContextType = {
  gap: '0em',
};

export const LayoutContext = React.createContext(layoutContextDefault);

export default LayoutContext;
