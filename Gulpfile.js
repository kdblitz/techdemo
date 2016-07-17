var _ = require('lodash');
var gulp = require('gulp');
var isWebpackRunning = false;
var $ = require('gulp-load-plugins')();

var PATHS = {
  frontendJs: 'frontend/scripts/**/*.js',
  directiveTemplates: 'frontend/**/*.html',
  backendJs: 'backend/**/*.js',
  webpackEntry: 'frontend/scripts/main.js',
  webpackOutput: 'frontend/'
};
PATHS.webpackFiles = [PATHS.frontendJs, PATHS.directiveTemplates,
  'frontend/**/*.less', 'frontend/**/*.css', '!frontend/styles.css'];
PATHS.allJsPaths = ['./*.js'].concat(PATHS.backendJs, PATHS.frontendJs);

gulp.task('default', ['develop', 'verify'], function () {
  var BROWSERSYNC_PORT = process.env.BROWSERSYNC_PORT || 3000;
  console.log('launching default browser!');
  setTimeout(function () {
    require('opn')('http://localhost:' + BROWSERSYNC_PORT);
  }, 3000);
});

gulp.task('develop',
  ['webpack'/*, /*'frontend-test-dev'*/, 'watch'],
  function () {
    return $.nodemon({
      script: 'backend/devServer.js',
      ignore: ['frontend', 'Gulpfile.js', '.idea'],
      tasks: ['semistandard']
    }).on('restart', function () {
      console.log('server restarted!');
    });
  }
);

gulp.task('webpack', webpackRoutine(true));

function webpackRoutine (watchMode) {
  return function () {
    if (!isWebpackRunning) {
      var webpack = require('webpack-stream');
      var webpackConfig = _.assign({watch: watchMode}, require('./webpack.config.js'));
      var webpackStream = webpack(webpackConfig);
      webpackStream.on('error', function () {
      });
      isWebpackRunning = true;

      gulp.src(PATHS.webpackEntry)
        .pipe(webpackStream)
        .pipe(gulp.dest(PATHS.webpackOutput));
    }
  };
}

gulp.task('watch', function () {
  gulp.watch(PATHS.allJsPaths, ['semistandard']);
});

gulp.task('verify', ['semistandard'], function () {
  console.log('build verification completed!');
});

gulp.task('semistandard', function () {
  return gulp.src(PATHS.allJsPaths)
    .pipe($.semistandard())
    .pipe($.semistandard.reporter('default', {
      breakOnError: true
    }));
});
