import gutil from 'gulp-util';

export const isEnv = (envParam) => {
  let
    result = false,
    isProduction = gutil.env.production || process.env.NODE_ENV === 'production',
    isStage = gutil.env.stage || process.env.NODE_ENV === 'stage',
    isTest = gutil.env.test || process.env.NODE_ENV === 'test';

  switch (param) {
    case 'production':
      result = isProduction;
      break;
    case 'stage':
      result = isStage;
      break;
    case 'test':
      result = isTest;
      break;
    case 'development':
      result = !isProduction && !isStage && !isTest;
      break;
  }
  return result;
}

export const whichEnv = () => {
  let
    result = 'development',
    isProduction = gutil.env.production || process.env.NODE_ENV === 'production',
    isStage = gutil.env.stage || process.env.NODE_ENV === 'stage',
    isTest = gutil.env.test || process.env.NODE_ENV === 'test';

  if (isProduction) {
    result = 'production';
  }
  if (isStage) {
    result = 'stage';
  }
  if (isTest) {
    result = 'test';
  }

  return result;
};
