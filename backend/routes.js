'use strict';
var path = require('path');
var express = require('express');

module.exports = function (app, config, cordInstance) {
  var baseUrl = '/' + config.application.name;
  app.get('/', redirectToHome);
  app.use(baseUrl, express.static(path.join(__dirname, '..', 'frontend')));
  app.use(redirectToHome);

  function redirectToHome (req, res) {
    res.redirect(baseUrl);
  }
};
