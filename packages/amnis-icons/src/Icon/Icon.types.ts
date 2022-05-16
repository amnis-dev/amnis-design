import type * as IoIcons from 'react-icons/io5';
import type * as HiIcons from 'react-icons/hi';
import type { IconBaseProps } from 'react-icons/lib';

export type IoIconName = keyof typeof IoIcons;
export type HiIconName = keyof typeof HiIcons;
export type IconName = IoIconName | HiIconName;

export interface IconProps extends Omit<IconBaseProps, 'name'> {
  name: IconName;
}
