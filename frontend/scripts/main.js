import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.less';

import 'bootstrap/dist/js/bootstrap.js';
import angular from 'angular';

import app from 'app';
import 'config';

angular.bootstrap(document, [app.name]);
