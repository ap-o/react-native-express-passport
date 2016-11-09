import config from './';
import utils from '../utils';


export default (app) => {
  app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    if(config.env === 'production'){
      res.sendStatus('User-agent: *\nAllow: /');
    }else{
      res.sendStatus('User-agent: *\nDisallow: /');
    }
  });

  app.get('*', (req, res) => {
    res.render('html.njk', {
      staticUrl : config.staticUrl,
      authFlash : req.flash('authFlash')
    });
  });

};
