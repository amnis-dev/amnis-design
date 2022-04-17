import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  name: 'amnis-design',
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
export default config;
