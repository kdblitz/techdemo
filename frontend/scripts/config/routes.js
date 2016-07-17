import app from 'app';

app.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    })
    .state('backend', {
      url: '/backend',
      template: '<backend-tools></backend-tools>'
    })
    .state('backend.tool', {
      url: '/tool/:toolId',
      template: '<tool tool-id="toolId"></tool>',
      controller: function ($scope, $stateParams) {
        $scope.toolId = $stateParams.toolId;
      }
    })
    .state('frontend', {
      url: '/frontend',
      template: '<frontend-tools></frontend-tools>'
    });
});
