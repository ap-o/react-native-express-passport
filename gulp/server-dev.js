import gulp from 'gulp';
import bg from 'gulp-bg';
import nodemon from 'gulp-nodemon';
import shell from 'gulp-shell';

gulp.task('server-dev', done => {
  gulp.src('').pipe(shell('nodemon'))
  done();
});

// gulp.task('server-dev', function () {
//   nodemon({
//     verbose: false,
//     ext: 'js,njk,json,jsx',
//     watch: [
//       'src/common/**/*',
//       'src/server/**/*'
//     ],
//     script: 'src/server/index.js',
//     exec: 'babel-node'
//   })
// })
