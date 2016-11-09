import gulp from 'gulp';
import env from 'gulp-env';
import { whichEnv } from './support/env';

gulp.task('env', () => {
  let environment = whichEnv();
  env({
    file: '.env.'+environment+'.json'
  });

});
