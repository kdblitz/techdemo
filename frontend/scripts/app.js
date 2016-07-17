import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import angular from 'angular';

import uiRouter from 'angular-ui-router';

import layout from 'layout';
import backend from 'backend';

export default angular.module('app', [
  uiRouter,
  layout,
  backend
]);
