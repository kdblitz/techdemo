import module from './module';

module.component('frontendTools', {
  bindings: {},
  controller: function (FrontendResourcesService) {
    this.tools = FrontendResourcesService.getResources();
  },
  template: require('./toolsView.html')
});
