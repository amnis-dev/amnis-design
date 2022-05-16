/* eslint-disable no-console */
/**
 * Prepares amnis design package.
 */
import fse from 'fs-extra';

const amnisDesignSourcePath = 'packages/amnis-design/src';

// Component packages
const packagePathsComponents = [
  'packages/amnis-icons',
  // 'packages/amnis-layout',
  'packages/amnis-display',
  'packages/amnis-entry',
];

// Utility packages
const packagePathsUtilities = [
  'packages/amnis-hooks',
  'packages/amnis-style',
];

function genComponents() {
  packagePathsComponents.forEach((path) => {
    const pathSource = `${path}/src`;
    const type = path.split('-')[1];
    const components = fse.readdirSync(pathSource, { withFileTypes: true })
      .filter((file) => file.isDirectory())
      .map((file) => file.name);

    // Create new TypeScript file for each component.
    components.forEach((component) => {
      const componentPath = `${amnisDesignSourcePath}/${component}.ts`;
      fse.writeFileSync(componentPath, `\
export * from '@amnis/${type}/${component}';
`, { encoding: 'utf8', flag: 'w' });
      console.log('Written new module: %s', componentPath);
    });
  });
}

function genUtility() {
  packagePathsUtilities.forEach((path) => {
    const pathSource = `${path}/src`;
    const type = path.split('-')[1];
    const utils = fse.readdirSync(pathSource, { withFileTypes: true })
      .filter((file) => file.isFile() && !['index.ts', 'index.tsx', 'tsconfig.json'].includes(file.name))
      .map((file) => file.name.split('.')[0]);

    console.log(utils);

    // Create new TypeScript file for each utility.
    utils.forEach((util) => {
      const utilPath = `${amnisDesignSourcePath}/${type}/${util}.ts`;
      fse.writeFileSync(utilPath, `\
export * from '@amnis/${type}/${util}';
`, { encoding: 'utf8', flag: 'w' });
      console.log('Written new module: %s', utilPath);
    });
  });
}

// genComponents();
genUtility();
