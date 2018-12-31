var express = require('express');
var router = express.Router();
// var logger = require('../logger');
var fs = require('fs');
var path = require('path')
var photos = require('../models/Photos')

/* GET home page. */
router.get('/', function (req, res, next) {
  photos.find({}, function (err, files) {
    res.render('photos', {
      title: 'Skelton',
      text:'Upload and share your images.',
      images: files
    });
  });
});

module.exports = router;












// 

// app.get("/image.png", (req, res) => {
//   res.sendFile(path.join(__dirname, "./uploads/image.png"));
// });