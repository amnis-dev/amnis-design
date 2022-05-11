import {
  Theme,
  ThemeBase,
} from './theme.types';
import { themeDefault } from './themeDefault';

/**
 * Deep merge example.
 */
export function deepMerge<T>(objects: Record<string, unknown>[]): T {
  const isObject = (obj: unknown) => obj && typeof obj === 'object';

  function deepMergeInner(target: Record<string, unknown>, source: Record<string, unknown>) {
    Object.keys(source).forEach((key: string) => {
      const targetValue = target[key];
      const sourceValue = source[key];

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        target[key] = targetValue.concat(sourceValue);
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = deepMergeInner(
          { ...(targetValue as Record<string, unknown>) },
          sourceValue as Record<string, unknown>,
        );
      } else {
        target[key] = sourceValue;
      }
    });

    return target;
  }

  if (objects.length < 2) {
    throw new Error('deepMerge: this function expects at least 2 objects to be provided');
  }

  if (objects.some((object) => !isObject(object))) {
    throw new Error('deepMerge: all values should be of type "object"');
  }

  const target = objects.shift();
  let source: Record<string, unknown> | undefined;

  // eslint-disable-next-line no-cond-assign
  while (source = objects.shift()) {
    if (target && source) {
      deepMergeInner(target, source);
    }
  }

  return target as T;
}

const generator = (base: ThemeBase): Theme => {
  const items: Record<string, unknown>[] = [{ ...themeDefault }, { ...base }];
  const merged = deepMerge<Theme>(items);
  const theme: Theme = merged;

  return theme;
};

export default generator;
