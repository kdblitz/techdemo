import module from './module';

module.component('backendTools', {
  controller: function (BackendResourcesService) {
    this.tools = BackendResourcesService.getResources();
  },
  template: require('./toolsView.html')
});
