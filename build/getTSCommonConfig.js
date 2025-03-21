'use strict';

const fs = require('fs');
const { getProjectPath } = require('./utils/projectHelper');

module.exports = function () {
  let my = {};
  if (fs.existsSync(getProjectPath('tsconfig.json'))) {
    my = require(getProjectPath('tsconfig.json'));
  }
  return Object.assign(
    {
    },
    my.compilerOptions,
  );
};