import type React from 'react';

export interface EntryProps {
  /**
   * Reference to the inner element.
   * @ignore
   */
  refInner?: React.RefObject<HTMLDivElement>;

  /**
   * Explicitly declare children.
   */
  children?: React.ReactNode;

  /**
   * An optional prefix to apply to identifiers.
   * @default 'entry'
   */
  prefix?: string;

  /**
    * Label for the entry input.
    */
  label?: string;

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
}
