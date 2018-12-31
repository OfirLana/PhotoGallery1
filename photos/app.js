var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const fs = require('fs');
const winston = require('winston');
var multer = require('multer');

var app = express();


//multer 
app.use(multer({ dest: './uploads/' }).single('photo'));
app.set('photos', path.join(__dirname + '/public/images'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// doing something
app.use(function (request, repsonse, next) {
  console.log(request.params)
  next();
})

// also doing something
// app.get ('/',(req,res) => res.render('upload'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/upload', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('listening to localhost:3000');
  }
})

module.exports = app;

// fs.readdir('./',function(err,files) {
//   if (err) console.log('error',err);
//   else console.log('Result',files);
// });
// app.get("/", function (req, res, next) {
//   fs.readFile("/public", function (err, data) {
//     if (err) {
//       next(err); // Pass errors to Express.
//     }
//     else {
//       res.send(data);
//     }
//   });
// });
// fs.readdir(path.join(__dirname, 'public/images'), function(err, data) {
//   res.json(data || err);
// });