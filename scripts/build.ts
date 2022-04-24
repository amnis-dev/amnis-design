/* eslint-disable no-console */
/**
 * Builds the amnis design packages.
 */
import { execSync } from 'child_process';
import glob from 'glob';
import fse from 'fs-extra';
import type { PackageJson } from 'type-fest/source/package-json';

// Order of build.
const packagePaths = [
  'packages/amnis-hooks',
  'packages/amnis-style',
  'packages/amnis-icons',
  'packages/amnis-layout',
  'packages/amnis-display',
  'packages/amnis-entry',
  'packages/amnis-design',
];

function tsCompile() {
  packagePaths.forEach((path) => {
    const command = `yarn tsc --project ${path}/tsconfig.json`;
    console.log(`Running '${command}'`);
    execSync(command);
  });
}

tsCompile();
