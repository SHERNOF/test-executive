const {MongoClient} = require('mongodb');

const connection = "mongodb+srv://shernof:Shernof78@cluster0-xnirm.mongodb.net/executive?retryWrites=true&w=majority"

const uri = new MongoClient(connection);