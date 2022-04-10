import type * as Icons from 'react-icons/io5';
import type { IconType } from 'react-icons/lib';

export type IconName = keyof typeof Icons;

export interface IconProps extends Omit<IconType, 'name'> {
  name: IconName;
}
