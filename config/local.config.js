'use strict';
var developmentConfig = require('./development.config.js');

developmentConfig.browserSync = {
  port: 3000
};

module.exports = developmentConfig;
