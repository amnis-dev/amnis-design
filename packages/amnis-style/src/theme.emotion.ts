import '@emotion/react';
import type { Theme as LibTheme } from './theme.types';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends LibTheme { }
}
