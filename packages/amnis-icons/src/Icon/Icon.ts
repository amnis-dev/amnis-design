import React from 'react';
import * as IoIcons from 'react-icons/io5';
import * as HiIcons from 'react-icons/hi';
import * as BiIcons from 'react-icons/bi';
import type { IconProps } from './Icon.types';

const Icons = { ...IoIcons, ...HiIcons, ...BiIcons };

export const Icon: React.FC<IconProps> = ({
  name,
  ...props
}) => React.createElement(Icons[name], props);

export default Icon;
