var passport = require('passport');

module.exports = function(app) {

  console.log("INITIALIZING AUTHENTICATION ROUTE");

  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/github/callback', passport.authenticate('github', {
    successRedirect: '/'
  }));

  app.get('/*', function(req, res, next) {
    console.log("VERIFYING AUTHENTICATION...");
    if (req.isAuthenticated()) {
      console.log("AUTHENTICATED, PROCEEDING...");
      return next();
    } else {
      console.log('NOT AUTHENTICATED, REDIRECTING TO AUTH PAGE...');
      res.render('auth');
    }
  });

};
