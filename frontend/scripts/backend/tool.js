import module from './module';

module.component('tool', {
  bindings: {
    'toolId': '<'
  },
  controller: function () {
    this.tool = {
      name: 'name'
    };
  },
  template: require('./tool.html')
});
