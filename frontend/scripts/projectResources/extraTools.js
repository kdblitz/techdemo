import module from './module';

module.component('extraTools', {
  controller: function (ExtraResourcesService) {
    this.tools = ExtraResourcesService.getResources();
  },
  template: require('./toolsView.html')
});
