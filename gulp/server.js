import gulp from 'gulp';
import runSequence from 'run-sequence';
import { whichEnv } from './support/env';

gulp.task('server', done => {
  let environment = whichEnv();
  if (environment === 'development') {
    runSequence('server-dev', done);
  } else {
    runSequence('clean', 'build', 'server-node', done);
  }
});
