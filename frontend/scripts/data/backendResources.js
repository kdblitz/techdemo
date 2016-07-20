export default [{
  name: 'Node.js',
  image: 'images/node.png',
  description: [
    'javascript engine used to run the backend application',
    'comes pre-installed with <abbr title="Node package manager">NPM</abbr>',
    'can support <abbr title="ECMAScript 6">ES6</abbr> features(more common ones) as of v4.0'
  ],
  references: [{
    name: 'Node.JS Documentation',
    link: 'https://nodejs.org/en/docs/'
  }, {
    name: 'Cool visual explaination of NPM',
    link: 'https://unpm.nodesource.com/'
  }, {
    name: 'NPM Registry',
    link: 'https://www.npmjs.com/'
  }]
}, {
  name: 'Express',
  image: 'images/express.png',
  description: [
    'serves the static files of the application',
    'also defines routing',
    'may use middlewares to help in session management, parsing post parameters, etc',
    `can be used to define your own API's`
  ],
  references: [{
    name: 'Express site',
    link: 'https://expressjs.com/'
  }, {
    name: 'Routing guide',
    link: 'https://expressjs.com/en/guide/routing.html'
  }]
}, {
  name: 'Nodemon',
  image: 'images/nodemon.svg',
  description: [
    'monitors file changes and reloads node to reflect changes',
    'perfect during development of backend codes'
  ],
  references: [{
    name: 'Nodemon site',
    link: 'http://nodemon.io/'
  }]
}, {
  name: 'Gulp',
  image: 'images/gulp.png',
  description: [
    'workflow management tool',
    `organize common actions as 'tasks'`
  ],
  references: [{
    name: 'Gulp Documentation',
    link: 'https://github.com/gulpjs/gulp/tree/master/docs'
  }]
}, {
  name: 'Webpack',
  image: 'images/webpack.gif',
  description: [
    'module bundler',
    `uses <em>loaders</em> as extensions to support processing of different file types`
  ],
  references: [{
    name: 'Webpack site',
    link: 'https://webpack.github.io/'
  }]
}, {
  name: 'Babel',
  image: 'images/babel.png',
  description: [
    'javascript compiler',
    'requires es2015-preset installation to allow usage of ES6 syntax in the frontend by transforming your code to ES5',
    'import polyfill extra features (like Promises/Generators)'
  ],
  references: [{
    name: 'Babel site',
    link: 'https://babeljs.io/'
  }, {
    name: 'ES6 Features',
    link: 'http://es6-features.org/'
  }]
}, {
  name: 'PostCSS',
  image: 'images/postcss.png',
  description: [
    'css transformer which uses other plugins',
    'ex. Autoprefixer plugin can be used so add vendor prefixes to css'
  ],
  references: [{
    name: 'PostCSS site',
    link: 'https://github.com/postcss/postcss'
  }, {
    name: 'Autoprefixer site',
    link: 'https://github.com/postcss/autoprefixer'
  }]
}, {
  name: 'Less',
  image: 'images/less.png',
  description: [
    'css pre-processor'
  ],
  references: [{
    name: 'Less language features',
    link: 'http://lesscss.org/features/'
  }]
}, {
  name: 'Semistandard',
  image: 'images/semistandard.svg',
  description: [
    'linting tool',
    'helps detect potential bugs',
    `defines the eslint rules so that you won't need to manage it`,
    'uses <a href="http://standardjs.com/rules.html" target="_blank">Standard style</a> + semicolons'
  ],
  references: [{
    name: 'Semistandard link',
    link: 'https://github.com/Flet/semistandard'
  }]
}, {
  name: 'Bower',
  image: 'images/bower.png',
  description: [
    'manages frontend dependencies of the application'
  ],
  references: [{
    name: 'Bower commands',
    link: 'https://bower.io/docs/api/'
  }, {
    name: 'Bower registry',
    link: 'https://bower.io/search/'
  }]
}, {
  name: 'Browsersync',
  image: 'images/browsersync.png',
  description: [
    'file synchronization - automatically refreshes page',
    'cross browser event synchronization'
  ],
  references: [{
    name: 'Browsersync Documentation',
    link: 'https://www.browsersync.io/docs'
  }]
}];
