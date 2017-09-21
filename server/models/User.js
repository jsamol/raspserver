var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim:  true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true,
    unique: true
  },
  scope: {
    type: String,
    default: "user"
  }
});

UserSchema.statics.verify = function(username, password, next) {
  User.findOne({
    username: username
  }, function(error, user) {
    if (error) {
      return next(error);
    }
    if (user) {
      bcrypt.compare(password, user.password, function (error, res) {
        var token = null;
        if (res) {
          token = `Bearer ${user.token}`;
        }
        next(error, res, token);
      });
    }
  })
};

UserSchema.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, function(error, salt) {
    bcrypt.hash(user.password, salt, function(error, hash) {
      if (error) {
        return next(error);
      }

      user.password = hash;
      next();
    });
  });
});

var User = mongoose.model('User', UserSchema);

module.exports = User;