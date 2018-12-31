var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Photos', {
    useNewUrlParser: true
},
    function (err) {
        err ? console.log(err) : console.log('connected...')
    }
);

var photos = new mongoose.Schema({
    name: String,
    path: String
});

// Export the model

var model = mongoose.model('Photos', photos);

// new model({name:"1","path":"ooo"}).save()
module.exports = model;
