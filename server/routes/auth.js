var express = require('express');
var router = express.Router();

var User = require('../models/User');

router.post("/", function(req, res, next) {
  User.verify(req.body.username, req.body.password, function(error, match, token){
    if (error) {
      return next(error);
    }
    if (!match) {
      var invalid = new Error("Invalid username or password");
      invalid.status = 401;
      return next(invalid);
    }
    res.send({
      token: token
    });
  });
});

module.exports = router;