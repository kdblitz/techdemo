import module from './module';

module.component('tool', {
  bindings: {
    'toolId': '<'
  },
  controller: function () {
    this.tool = {
      name: 'Node.js',
      image: 'images/node.png',
      description: [
        'javascript engine used to run the backend application',
        'can support <abbr title="ECMAScript 6">ES6</abbr> features(more common ones) as of v4.0',
        'comes pre-installed with <abbr title="Node package manager">NPM</abbr>'
      ],
      references: [{
        name: 'Node.JS Documentation',
        link: 'https://nodejs.org/en/docs/'
      }, {
        name: 'Cool visual explaination of NPM',
        link: 'https://unpm.nodesource.com/'
      }]
    };
  },
  template: require('./tool.html')
});
