var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./routes/index');
var auth = require('./routes/auth');
var users = require('./routes/users');

var db_config = require('./config/db_config');
var AuthController = require('./controllers/Auth');

var app = express();

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${db_config.host}:${db_config.port}/${db_config.db}`, {
  useMongoClient: true
});

mongoose.connection.on('error', function(error) {
  console.error(error);
  process.exit(1);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auth', auth);
app.use('/', AuthController.authenticate, index);
app.use('/users', AuthController.authenticate, users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
