import app from 'app';

app.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<home></home>'
    })
    .state('backend', {
      url: '/backend',
      template: '<backend-tools></backend-tools>'
    })
    .state('frontend', {
      url: '/frontend',
      template: '<frontend-tools></frontend-tools>'
    });
});
