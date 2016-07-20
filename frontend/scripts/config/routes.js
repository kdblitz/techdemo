import app from 'app';

function getToolStateConfiguration (resolve) {
  return {
    url: '/tool/:toolId',
    resolve,
    template: '<tool-details tool="tool"></tool-details>',
    controller: function ($scope, tool) {
      $scope.tool = tool;
    }
  };
}

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
    .state('backend.tool', getToolStateConfiguration({
      tool: ($stateParams, BackendResourcesService) =>
        BackendResourcesService.getResource($stateParams.toolId)
    }))
    .state('frontend', {
      url: '/frontend',
      template: '<frontend-tools></frontend-tools>'
    })
    .state('frontend.tool', getToolStateConfiguration({
      tool: ($stateParams, FrontendResourcesService) =>
        FrontendResourcesService.getResource($stateParams.toolId)
    }))
    .state('extra', {
      url: '/extra',
      template: '<extra-tools></extra-tools>'
    })
    .state('extra.tool', getToolStateConfiguration({
      tool: ($stateParams, ExtraResourcesService) =>
        ExtraResourcesService.getResource($stateParams.toolId)
    }))
    .state('about', {
      url: '/about',
      template: '<about></about>'
    });
});
