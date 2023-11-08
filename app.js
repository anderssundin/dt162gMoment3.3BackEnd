
var createError = require('http-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coursesRouter = require('./routes/allCourses');
var courseIdRouter = require('./routes/courseById');
var courseDeleteRouter = require('./routes/deleteCourseById');
var courseAddRouter = require('./routes/addCourse');
var app = express();

//Default cors settings
app.use(cors());

// Connect to database
mongoose.connect('mongodb://127.0.0.1:27017/myCV')
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set upp endpoints
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', courseIdRouter);
app.use('/courses', coursesRouter);
app.use('/courses', courseDeleteRouter);
app.use('/courses', courseAddRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
