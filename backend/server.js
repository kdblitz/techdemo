'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

module.exports = function (config) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  require('./routes')(app, config);
  var PORT = process.env.PORT || config.application.port;

  app.listen(PORT, createPostListenAction({
    PORT: PORT,
    BROWSERSYNC_PORT: getBrowserSyncPortFromConfig(config)
  }));
};

function getBrowserSyncPortFromConfig (config) {
  return (config.browserSync) ? config.browserSync.port : undefined;
}

function createPostListenAction (options) {
  if (options.BROWSERSYNC_PORT) {
    return function () {
      var browserSync = require('browser-sync');
      browserSync.init({
        open: false,
        port: options.BROWSERSYNC_PORT,
        proxy: 'localhost:' + options.PORT,
        files: ['app/styles.css', 'app/bundle.js', 'app/index.html']
      });
    };
  } else {
    return function () {
      console.log('Express server running on port:' + options.PORT);
    };
  }
}
