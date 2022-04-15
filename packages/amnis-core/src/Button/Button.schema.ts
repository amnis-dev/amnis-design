/**
 * DO NOT EDIT
 * Run the command `yarn gen:schema` in the root project folder to generate the code.
 */
import { JSONSchema7 } from 'json-schema';

export const ButtonSchema: JSONSchema7 = {
  description: 'A simple button that invokes some action.',
  type: 'object',
  properties: {
    label: {
      description: 'Button contents',
      type: 'string',
      title: 'Label',
    },
    paint: {
      description: 'Theme paint colors',
      default: 'primary',
      enum: [
        'base',
        'baseDark',
        'baseLight',
        'cool',
        'coolDark',
        'coolLight',
        'danger',
        'information',
        'main',
        'positive',
        'primary',
        'primaryDark',
        'primaryLight',
        'secondary',
        'secondaryDark',
        'secondaryLight',
        'warm',
        'warmDark',
        'warmLight',
        'warning',
      ],
      type: 'string',
      title: 'Paint',
    },
    variant: {
      description: 'Set the variant styling of the button.',
      default: 'filled',
      enum: [
        'filled',
        'icon',
        'outlined',
        'unstyled',
      ],
      type: 'string',
      title: 'Variant',
    },
    size: {
      description: 'Size options for the button',
      default: 'normal',
      enum: [
        'big',
        'normal',
        'small',
      ],
      type: 'string',
      title: 'Size',
    },
    icon: {
      description: 'Sets an icon for the button.',
      enum: [
        'check',
        'chevron-down',
        'chevron-left',
        'chevron-right',
        'chevron-up',
        'danger',
        'external-link',
        'facebook',
        'google',
        'information',
        'instagram',
        'linkedin',
        'menu',
        'plus',
        'positive',
        'question-mark',
        'search',
        'selector',
        'twitch',
        'twitter',
        'warning',
        'x',
        'youtube',
      ],
      type: 'string',
      title: 'Icon',
    },
    disabled: {
      description: 'Determines if the button should be disabled',
      default: false,
      type: 'boolean',
      title: 'Disabled',
    },
    type: {
      description: 'Type of button element',
      default: 'button',
      enum: [
        'button',
        'submit',
      ],
      type: 'string',
      title: 'Type',
    },
    children: {
      $ref: '#/definitions/React.ReactNode',
      description: 'Child elements',
      title: 'Children',
    },
    onClick: {
      description: 'Optional click handler',
      type: 'object',
      title: 'On Click',
    },
  },
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Button',
};

export default ButtonSchema;
