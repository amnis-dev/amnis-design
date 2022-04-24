/* eslint-disable no-console */
/**
 * Builds the amnis design packages.
 */
import { execSync } from 'child_process';
import fse from 'fs-extra';

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
    console.log(`Running '${command}...'`);
    execSync(command);
    console.log('Command complete.');
    console.log('');

    console.log(`Copying '${path}/package.json' into the build directory...`);
    fse.copySync(`${path}/package.json`, `${path}/.dist/package.json`);
    console.log('Copy complete.');
    console.log('');
  });
}

tsCompile();
