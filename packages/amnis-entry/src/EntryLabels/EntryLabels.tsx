import React from 'react';
import { EntryLabelsProps } from './EntryLabels.types';

/**
 * ## Subtitle
 * TODO: Write component details
 */
export const EntryLabels: React.FC<EntryLabelsProps> = ({
  refInner,
  children,
}) => (
  <div ref={refInner}>
    {children}
  </div>
);

export default EntryLabels;
