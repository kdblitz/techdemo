export default [{
  name: 'AngularJS',
  image: 'images/angular.png',
  description: [
    'currently using 1.4 (but will be transitioning to 1.5 and eventually 2.0)'
  ],
  files: [
    'most of the files in the frontend folder (those importing angular)'
  ],
  references: [{
    name: 'Angular site',
    link: 'https://angularjs.org/'
  }, {
    name: 'Angular 1 documentation',
    link: 'https://docs.angularjs.org/api'
  }]
}, {
  name: 'UI Router',
  image: 'images/ui-router.png',
  description: [
    'routing framework for AngularJS',
    'routes organized as a state machine',
    'allows nested states'
  ],
  files: [
    'frontend/scripts/config/routes.js - contains the state transitions'
  ],
  references: [{
    name: 'UI Router Documentation',
    link: 'http://angular-ui.github.io/ui-router/site/#/api/ui.router'
  }]
}, {
  name: 'jQuery',
  image: 'images/jquery.svg',
  description: [
    'library for document traversal, manipulation, event handling and animation'
  ],
  files: [
    'not directly used, bootstrap dependency'
  ],
  references: [{
    name: 'jQuery Documentation',
    link: 'http://api.jquery.com/'
  }]
}, {
  name: 'Bootstrap',
  image: 'images/bootstrap.png',
  description: [
    `well not completely<span title="we are using an customized version for Nokia">...</span>`,
    'manages the layout and overall look and feel of the site'
  ],
  files: [
    'used by html templates of directives'
  ],
  references: [{
    name: 'Bootstrap documentation',
    link: 'http://getbootstrap.com/css/'
  }]
}, {
  name: 'FuelUX',
  image: 'images/fuelux.png',
  description: [
    'additional jQuery plugins for additional components'
  ],
  references: [{
    name: 'FuelUX Components',
    link: 'http://getfuelux.com/javascript.html'
  }]
}, {
  name: 'Lodash',
  image: 'images/lodash.png',
  description: [
    'collection of utility functions handling javascript objects or collections'
  ],
  references: [{
    name: 'Lodash documentation',
    link: 'https://lodash.com/docs'
  }, {
    name: '10 Javascript Utility Functions That You Should Probably Stop Rewriting',
    link: 'http://colintoh.com/blog/lodash-10-javascript-utility-functions-stop-rewriting'
  }]
}];
