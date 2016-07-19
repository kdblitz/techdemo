import module from './module';

module.component('backendTools', {
  bindings: {},
  controller: function (BackendResourcesService) {
    this.tools = BackendResourcesService.getResources();
  },
  template: require('./toolsView.html')
});
