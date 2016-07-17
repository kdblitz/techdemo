import angular from 'angular';
import 'angular-sanitize';

import uiRouter from 'angular-ui-router';

import layout from 'layout';
import home from 'home';
import backend from 'backend';

export default angular.module('app', [
  uiRouter,
  layout,
  home,
  backend
]);
