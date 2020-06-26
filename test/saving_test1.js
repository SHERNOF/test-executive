const mocha = require('mocha')
const assert = require('assert')
const LogIn = require('../models/test1')

// describe test
describe('Saving records', function(){
    
    // create test
    it('Save Record to Db', function(done){
        var char = new LogIn({
            name: 'Sherwin'
        });

        char.save().then(function(){
            assert(char.isNew === false)
            done()
        })

    });

});