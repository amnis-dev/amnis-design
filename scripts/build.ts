/**
 * Builds the amnis design packages.
 */
import yargs from 'yargs';
import glob from 'glob';
import fse from 'fs-extra';
import type { PackageJson } from 'type-fest/source/package-json';
