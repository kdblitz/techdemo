import module from './module';

module.component('toolDetails', {
  bindings: {
    'tool': '<'
  },
  template: require('./toolDetails.html')
});
