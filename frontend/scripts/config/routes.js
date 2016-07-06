import app from 'app';

app.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('app', {
      url: '/home',
      template: 'home'
    });
});
