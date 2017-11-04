// ****************************************************************
    // MongoDb Schema
// ****************************************************************    
var mongoose = require("mongoose");

var recepientSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    bloodgroup: String,
    age: String,
    gender: String,
    place: String,
    time: String
});

module.exports = mongoose.model("Recipient", recepientSchema);