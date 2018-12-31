var path = require('path');
var fs = require('fs');
var join = path.join;


function getUploadForm(req, res, next) {
    res.render('photos/upload', {
        title: 'Photo upload form'
    });
}

module.exports = {
    listImages: listImages,
    uploadImage: uploadImage,
    getUploadForm: getUploadForm
  };























// app.post('/upload', photos.uploadImage("moshe"));
// function uploadImage(dir) {
//     return function (req, res, next) {

//     }
// }