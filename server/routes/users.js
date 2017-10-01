var express = require('express');
var router = express.Router();

var User = require('../models/User');

router.get('/', function(req, res, next) {
  User.listAll(function(error, users) {
    if (error) {
      return next(error);
    }
    res.send({
      users: users
    });
  });
});

router.post("/", function(req, res, next) {
  var newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });

  if (req.body.scope) {
    newUser['scope'] = req.body.scope;
  }

  newUser.save(function(error, newUser) {
    if (error) {
      return next(error);
    }
    res.send({
      createdUser: newUser
    });
  });
});

module.exports = router;
