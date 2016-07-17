import app from 'app';

app.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('app', {
      url: '/home',
      template: 'home'
    })
    .state('backend', {
      url: '/backend',
      template: '<backend-tools></backend-tools>'
    });
});
