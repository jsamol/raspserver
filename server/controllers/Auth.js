var passport = require('passport');
var bearer = require('passport-http-bearer');

var User = require('../models/User');

passport.use(new bearer.Strategy(function(token, next) {
  User.findOne({ token: token }, function(error, user) {
    if (error) {
      return next(error);
    }
    if (!user) {
      return next(null, false);
    }
    return next(null, user);
  });
}));

exports.authenticate = passport.authenticate('bearer', { session: false });