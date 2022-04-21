import type React from 'react';
import type { EntryContextType } from '../EntryContext';

export interface EntryProps<T> {
  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * Entry's value.
   */
  value?: T;

  /**
   * An optional prefix to apply to identifiers.
   * @default 'entry'
   */
  prefix?: string;

  /**
    * Label for the entry input.
    */
  label: string;

  /**
    * Description for the entry input.
    */
  description?: string;

  /**
    * Possible errors for the entry.
    */
  errors?: string[];

  /**
    * Flags a required field.
    * @default false
    */
  required?: boolean;

  /**
    * Flag to disable the entry.
    * @default false
    */
  disabled?: boolean;

  /**
   * Input suggestions for the entry.
   */
  suggestions?: string[];

  /**
   * Change callback
   */
  onChange?: EntryContextType<T>['onChange'];
}
