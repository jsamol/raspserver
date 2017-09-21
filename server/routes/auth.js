var express = require('express');
var router = express.Router();

var User = require('../models/User');

router.post("/", function(req, res, next) {
  User.verify(req.body.username, req.body.password, function(error, match){
    if (error) {
      return next(error);
    }

    if (!match) {
      var unauthorized = new Error("Invalid username or password");
      unauthorized.status = 401;
      return next(unauthorized);
    }

    res.send("authenticated");
  });
});

module.exports = router;