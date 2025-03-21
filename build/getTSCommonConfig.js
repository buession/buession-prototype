'use strict';

const fs = require('fs');
const { getProjectPath } = require('./utils/projectHelper');

module.exports = function () {
  const tsconfigFile = getProjectPath('tsconfig.json');
  let my = {};
  if (fs.existsSync(tsconfigFile)) {
    my = require(tsconfigFile);
  }
  return Object.assign(
    {
    },
    my.compilerOptions,
  );
};