#!/bin/sh

if [ -d "./dist/" ]
then
    echo "Clearing dist/ directory"
    rm -r "./dist/"
fi

if [ -d "./bin/" ]
then
    echo "Clearing bin/ directory"
    rm -r "./bin/"
fi

echo "Compiling library"
npm run-script build >/dev/null

mkdir ./dist/

echo "Copying files in bin/ to dist/"
cp ./bin/*       ./dist/   2>/dev/null
cp ./bin/types/* ./dist/

echo "Copying package files to dist/"
cp LICENSE ./dist/
cp package.json ./dist/
cp README.md ./dist/
cp .npmignore ./dist/

if [ "$1" != "--package-only" ]
then
    echo "Publishing module..."
    npm publish dist >/dev/null
else
    echo "\"--package-only\" flag set, publish skipped."
fi
