'use strict';
var path = require('path');
var express = require('express');

module.exports = function (app, config, cordInstance) {
  var baseUrl = '/' + config.application.name;
  app.get('/', function (req, res) {
    res.redirect(baseUrl);
  });
  app.use(baseUrl, express.static(path.join(__dirname, '..', 'frontend')));
};
