import angular from 'angular';
import 'angular-sanitize';

import uiRouter from 'angular-ui-router';

import layout from './layout';
import home from './home';
import projectResources from './projectResources';
import about from './about';

export default angular.module('app', [
  uiRouter,
  layout,
  home,
  projectResources,
  about
]);
