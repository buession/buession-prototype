const { resolve, isThereHaveBrowserslistConfig } = require('./utils/projectHelper');

module.exports = function (modules) {
  return {
    presets: [
      [
        resolve('@babel/preset-env'),
        {
          modules,
          useBuiltIns: false,
          corejs: false,
          targets: isThereHaveBrowserslistConfig() ? {
            esmodules: true
          } : {
            esmodules: true,
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 11']
          }
        }
      ]
    ],
    plugins: [
      [
        resolve('@babel/plugin-transform-typescript'),
        {
          isTSX: false
        }
      ],
      //[resolve('@vue/babel-plugin-jsx'), { mergeProps: false, enableObjectSlots: false }],
      resolve('@babel/plugin-transform-optional-chaining'),
      resolve('@babel/plugin-proposal-export-default-from'),
      resolve('@babel/plugin-transform-export-namespace-from'),
      resolve('@babel/plugin-transform-class-properties'),
      [
        resolve('@babel/plugin-transform-runtime'),
        {
          corejs: false,
          helpers: false,
          regenerator: false,
          useESModules: modules === false,
          version: '^7.10.4',
            //require(`${process.cwd()}/package.json`).dependencies['@babel/runtime'] || '^7.10.4',
        },
      ],
      // resolve('babel-plugin-inline-import-data-uri'),
      // resolve('@babel/plugin-transform-member-expression-literals'),
      // resolve('@babel/plugin-transform-property-literals'),
      // resolve('@babel/plugin-transform-template-literals'),
    ],
    env: {
      test: {
        plugins: [resolve('babel-plugin-istanbul')]
      }
    }
  };
};