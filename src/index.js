#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const startScript = require('./start');
const buildScript = require('./build');
const { appPath } = require('react-scripts/config/paths');

const argv = process.argv;
const command = argv[argv.length - 1];
const webpackExtendFilepath = path.join(appPath, 'config/webpack.extend.js');

const override = fs.existsSync(webpackExtendFilepath) ?
  require(webpackExtendFilepath) : {};

//create-react-app issue
//https://github.com/facebook/create-react-app/issues/6303

if (command === 'start') {
  startScript(override);
}

else if (command === 'build') {
  buildScript(override);
}

