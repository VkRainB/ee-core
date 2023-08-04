'use strict';

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const is = require('is-type-of');

const _basePath = process.cwd();

function loadConfig(prop) {
  const configFile = prop || './electron/config/bin.js';
  const filepath = path.join(_basePath, configFile);
  if (!fs.existsSync(filepath)) {
    const errorTips = 'config file ' + chalk.blue(`${filepath}`) + ' does not exist !';
    throw new Error(errorTips)
  }
  const obj = require(filepath);
  if (!obj) return obj;

  let ret = obj;
  if (is.function(obj) && !is.class(obj)) {
    ret = obj();
  }

  return ret || {};
};

module.exports = {
  loadConfig
}