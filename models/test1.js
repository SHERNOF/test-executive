const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create Schema and model


const LogInSchema = new Schema({
    name: String,
    password: String
})

const LogIn = mongoose.model('login', LogInSchema)

module.exports = LogIn;