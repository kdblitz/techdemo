import module from './module';

module.component('frontendTools', {
  controller: function (FrontendResourcesService) {
    this.tools = FrontendResourcesService.getResources();
  },
  template: require('./toolsView.html')
});
