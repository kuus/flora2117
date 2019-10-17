const gulp = require('gulp');
const scripts = require('./dev-lib/gulp/scripts');
const scriptsVendor = require('./dev-lib/gulp/scripts-vendor');
const styles = require('./dev-lib/gulp/styles');
const injectStyles = require('./dev-lib/gulp/inject-styles');
const injectScripts = require('./dev-lib/gulp/inject-scripts');
const views = require('./dev-lib/gulp/views');
const images = require('./dev-lib/gulp/images');
const fonts = require('./dev-lib/gulp/fonts');
const extras = require('./dev-lib/gulp/extras');
const info = require('./dev-lib/gulp/info');
const optimize = require('./dev-lib/gulp/optimize');
const clean = require('./dev-lib/gulp/clean');
const modernizr = require('./dev-lib/gulp/modernizr');
const deploy = require('./dev-lib/gulp/deploy');
const serveDist = require('./dev-lib/gulp/serve-dist');
const html = require('./dev-lib/gulp/html');
const watch = require('./dev-lib/gulp/watch');

// Public tasks
gulp.task('inject', gulp.parallel(injectStyles, injectScripts));
gulp.task('serve', gulp.series('inject', gulp.parallel(views, styles, scripts, modernizr, fonts), watch));
gulp.task('build', gulp.series(clean, 'inject', scriptsVendor, gulp.parallel(views, styles, scripts, modernizr, fonts, /*lint,*/ images, extras), html, optimize, info));
gulp.task('build').description = 'an example of build task: `$ gulp build --dist mangle,htmlmin,static,inline`';
gulp.task('default', gulp.task('serve'));
gulp.task(serveDist);
gulp.task(deploy);
gulp.task(clean);
gulp.task(info);

// Private tasks

// gulp.task(serveTest, gulp.task(scripts));
// function serveTest() {
//   server('test', {'/scripts': `${paths.TEMP}/scripts` });
//   gulp.watch('test/spec/**/*.js').on('change', reload);
//   gulp.watch('test/spec/**/*.js').on('all', lintTest);
//   gulp.watch(`${paths.APP}/scripts/**/*.js`).on('change', scripts);
// }
