import React from 'react';
import * as IoIcons from 'react-icons/io5';
import * as HiIcons from 'react-icons/hi';
import type { IconProps } from './Icon.types';

const Icons = { ...IoIcons, ...HiIcons };

export const Icon: React.FC<IconProps> = ({
  name,
  ...props
}) => React.createElement(Icons[name], props);

export default Icon;
