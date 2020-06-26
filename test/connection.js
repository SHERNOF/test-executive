const mongoose = require('mongoose');

// Promises
mongoose.Promise = global.Promise;

// ?Connect to DB before tests run
before(function(done){

        // connect to mongo
    mongoose.connect('mongodb://localhost/exec');

    mongoose.connection.once('open', function(){
        console.log('Hello Lord')
        done();
    }).on('error', function(error){
        console.log('Connection Error')
    });


})




