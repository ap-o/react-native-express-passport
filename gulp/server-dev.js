import gulp from 'gulp';
import bg from 'gulp-bg';
import nodemon from 'gulp-nodemon';
import shell from 'gulp-shell';

gulp.task('server-dev', ['env'], done => {
  gulp.src('').pipe(shell('nodemon'))
  done();
});

// noope
// gulp.task('server-dev-nodemon', ['env'], done => {
//   nodemon({
//     execMap: {
//       js: 'babel-node'
//     },
//     script: 'src/server/index.js',
//     ignore: ['*'],
//     watch: [
//       'src/server/**/*'
//     ],
//     ext: 'noop'
//   }).on('restart', function() {
//     console.log('Restarted!');
//   });
// });
