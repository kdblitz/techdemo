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
      resolve: {
        tool: function ($stateParams, BackendResourcesService) {
          return BackendResourcesService.getResource($stateParams.toolId);
        }
      },
      template: '<tool-details tool="tool"></tool-details>',
      controller: function ($scope, tool) {
        $scope.tool = tool;
      }
    })
    .state('frontend', {
      url: '/frontend',
      template: '<frontend-tools></frontend-tools>'
    })
    .state('frontend.tool', {
      url: '/tool/:toolId',
      resolve: {
        tool: function ($stateParams, FrontendResourcesService) {
          return FrontendResourcesService.getResource($stateParams.toolId);
        }
      },
      template: '<tool-details tool="tool"></tool-details>',
      controller: function ($scope, tool) {
        $scope.tool = tool;
      }
    });
});
