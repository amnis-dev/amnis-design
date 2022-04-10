import React from 'react';
import * as Icons from 'react-icons/io5';
import type { IconProps } from './Icon.types';

export const Icon: React.FC<IconProps> = ({ name, ...props }) => React.createElement(Icons[name], props);

export default Icon;
