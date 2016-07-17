import module from './module';

module.component('tool', {
  bindings: {
    'toolId': '<'
  },
  controller: function (BackendResourcesService) {
    this.tool = BackendResourcesService.getBackendTools()[this.toolId];
  },
  template: require('./tool.html')
});
