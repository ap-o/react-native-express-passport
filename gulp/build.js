import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', done => {
  runSequence('env', 'clean', 'build-server', done);
});
