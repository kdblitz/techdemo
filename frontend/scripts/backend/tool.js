import module from './module';

module.component('tool', {
  bindings: {
    'toolId': '<'
  },
  template: require('./tool.html')
});
