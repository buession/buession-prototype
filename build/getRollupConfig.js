'use strict';

const fs = require('fs');
const { camelCase } = require('lodash');
const assign = require('object-assign');

//const babel = require('gulp-babel');
const babel = require('@rollup/plugin-babel');

/*
const eslint = require('@rollup/plugin-eslint');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const replace = require('@rollup/plugin-replace');
const terser = require('@rollup/plugin-terser');
*/

const { getProjectPath } = require('./utils/projectHelper');

const pkg = require(getProjectPath('package.json'));
const distDir = getProjectPath('dist');

const date = new Date();

const name = camelCase(pkg.alias);
const filename = pkg.alias;

const comment = `/*!
 * Buession ${pkg.alias} ${pkg.version}
 *
 * @link ${pkg.homepage}
 * @source ${pkg.repository.url}
 * @copyright @ 2020-${date.getFullYear()} ${pkg.copyright}
 * @license MIT
 * @Build Time ${date.toUTCString()}
 */
`

const plugins = [
  /*
  eslint('./.eslintrc.js'),
  resolve({
    rootDir: './src',
    browser: true,
    modulesOnly: true,
    exportConditions: ['node', 'browser'],
    logUnresolvedImport: true,
    extensions: ['.ts', '.js']
  }),
  commonjs({
  }),
  typescript({
    tsconfig: './tsconfig.json'
  }),
  replace({
    preventAssignment: true,
    values: {
      __NAME__: pkg.alias,
      __VERSION__: pkg.version,
      'process.env.NODE_ENV': `""`
    }
  }),
  babel({
    configFile: './babel.config.js',
    babelHelpers: 'runtime',
    extensions: ['.ts', '.js'],
    exclude: 'node_modules/**'
  })
  */
];
const minifyPlugins = plugins;//[...plugins, terser()];

module.exports = function () {
  const rollupConfigFile = getProjectPath('rollup.config.js');
  let rollupConfig = {};
  if (fs.existsSync(rollupConfigFile)) {
    rollupConfig = require(rollupConfigFile);

    const outputConfigs = assign(rollupConfig.output, {
      name: name,
      banner: comment,
    });

    rollupConfig.output = [
      // AMD Browser Build
      {
        ...outputConfigs,
        plugins: plugins,
        file: `${distDir}/${filename}.amd.js`,
        format: 'amd'
      },
      {
        ...outputConfigs,
        plugins: minifyPlugins,
        file: `${distDir}/${filename}.amd.min.js`,
        format: 'amd'
      },

      // UMD Browser Build
      {
        ...outputConfigs,
        plugins: plugins,
        file: `${distDir}/${filename}.umd.js`,
        format: 'umd'
      },
      {
        ...outputConfigs,
        plugins: minifyPlugins,
        file: `${distDir}/${filename}.umd.min.js`,
        format: 'umd'
      },
      {
        ...outputConfigs,
        plugins: plugins,
        file: `${distDir}/${filename}.js`,
        format: 'umd'
      },
      {
        ...outputConfigs,
        plugins: minifyPlugins,
        file: `${distDir}/${filename}.min.js`,
        format: 'umd'
      },

      // ESM Module Bundle Build
      {
        ...outputConfigs,
        plugins: plugins,
        file: `${distDir}/${filename}.esm.js`,
        format: 'esm'
      },
      {
        ...outputConfigs,
        plugins: minifyPlugins,
        file: `${distDir}/${filename}.esm.min.js`,
        format: 'esm'
      },

      // IIFE Module Bundle Build
      {
        ...outputConfigs,
        plugins: plugins,
        file: `${distDir}/${filename}.iife.js`,
        format: 'iife'
      },
      {
        ...outputConfigs,
        plugins: minifyPlugins,
        file: `${distDir}/${filename}.iife.min.js`,
        format: 'iife'
      },

      // COMMONJS Module Bundle Build
      {
        ...outputConfigs,
        plugins: plugins,
        file: `${distDir}/${filename}.cjs.js`,
        format: 'cjs'
      },
      {
        ...outputConfigs,
        plugins: minifyPlugins,
        file: `${distDir}/${filename}.cjs.min.js`,
        format: 'cjs'
      }
    ];
  }

  return assign(
    {
    },
    rollupConfig
  );
};
