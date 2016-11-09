import gulp from 'gulp';
import webpackBuild from '../src/webpack/server-build';

gulp.task('build-server', ['env'], done => webpackBuild(done));
