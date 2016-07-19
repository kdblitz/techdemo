import module from './module';

module.component('tool', {
  bindings: {
    'tool': '<'
  },
  template: require('./tool.html')
});
