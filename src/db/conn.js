const mongoose = require('mongoose');

// creating a database
mongoose.connect('mongodb://localhost:27017/olympics', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind('connection error:'));
db.once('open', function () {
    console.log("we are connected now");
});