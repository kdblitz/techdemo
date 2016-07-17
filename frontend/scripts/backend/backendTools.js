import module from './module';

module.component('backendTools', {
  bindings: {},
  controller: function (BackendResourcesService) {
    this.backendTools = BackendResourcesService.getBackendTools();
  },
  template: require('./backendTools.html')
});
