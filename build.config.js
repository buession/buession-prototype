const fs = require('fs');
const path = require('path');

function finalizeCompile() {
}

function finalizeDist() {
}

module.exports = {
  compile: {
    finalize: finalizeCompile,
  },
  dist: {
    finalize: finalizeDist,
  },
  bail: true,
};