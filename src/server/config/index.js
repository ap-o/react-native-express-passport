function configExport() {}

//EAAUMo9TlhP0BAEEU7BYAYACrJ1MqTjy3t4GNZBB5whLhKbepYDsa3xGuHfeGZBr1rWzLfxK26uOZBClCsWLUkOkk0Uovd85WvVhNRPndtL4fruWHZBIsVZAWahShSLf28u0kY0wPNsqQzTAgl6fSEbTRC937bHor2r16CjXFQDwZDZD

// root
configExport.env = process.env.NODE_ENV || 'development';
configExport.port = process.env.PORT || 8000;

configExport.appName = 'unbroken';
configExport.appVersion = '0.1';
configExport.staticUrl = process.env.STATIC_URL;
configExport.appUrl = process.env.APP_URL;
configExport.apiUrl = process.env.API_URL;

// mongo
configExport.mongo = {
  uri: process.env.MONGO_URI,
  port: process.env.PORT,
  options: {
      server: {
          socketOptions: {
              keepAlive: 1
          }
      },
      replset:{
          socketOptions: {
              keepAlive: 1
          }
      }
  }
};

//session
configExport.session = {
  secret: process.env.SESSION_SECRET
}

configExport.auth = {
  facebook: {
    clientID: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SECRET,
    callbackURL: configExport.appUrl+'auth/facebook/callback'
  }
}

export default configExport;
