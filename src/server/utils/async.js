import async from 'async';

export function breakWaterfall (tasks, callback) {
  async.waterfall(tasks, function(){
    if(arguments[0] === 'break'){
      arguments[0] = null;
    }
    callback.apply(null, arguments);
  });
}
