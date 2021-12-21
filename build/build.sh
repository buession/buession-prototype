#!/bin/bash

set -e

NAME=$(node -p "require('./package.json').name")
VERSION=$(node -p "require('./package.json').version")

echo "$Building ${NAME} ${VERSION}"
echo ''

rm -rf dist
find -name "*.d.ts" ./src
exit

echo 'Compile JS...'
rollup -c build/rollup.config.js
echo 'Done.'
echo ''