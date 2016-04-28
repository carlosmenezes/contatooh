var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {

  console.log("INITIALIZING PASSPORT CONFIGURATION");
  var Usuario = mongoose.model('Usuario');

  passport.use(new GitHubStrategy({
    clientID: '116dc8d0566604ca8c3c',
    clientSecret: '77a3b2e0f420c6a49e249c5fb3d1d14922e7e6c8',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  }, function(accessToken, refreshToken, profile, done) {

    Usuario.findOrCreate(
      { "login": profile.username },
      { "nome": profile.username },
      (erro, usuario) => {
        if (erro) {
          console.error(erro);
          return done(erro);
        }

        return done(null, usuario);
      }
    );
  }));

  passport.serializeUser((usuario, done) => done(null, usuario._id));

  passport.deserializeUser((id, done) => {
    Usuario.findById(id).exec()
      .then((usuario) => done(null, usuario));
  });
};
