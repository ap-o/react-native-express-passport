import gulp from 'gulp';
import webpackBuild from '../webpack/server-build';

gulp.task('build-server', ['env'], done => webpackBuild(done));
