/* eslint-disable no-console */
/**
 * Publishes the amnis design packages.
 */
import { execSync } from 'child_process';

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

function publish() {
  packagePaths.forEach((path) => {
    const command = 'yarn publish --access public';
    console.log(`Running '${command}' in '${path}'...`);
    execSync(command, { cwd: path });
    console.log('Publishing complete.');
    console.log('');
  });
}

publish();
