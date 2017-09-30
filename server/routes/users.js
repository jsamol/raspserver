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



module.exports = router;
