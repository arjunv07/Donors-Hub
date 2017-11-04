// ****************************************************************
    // MongoDb Schema
// ****************************************************************    
var mongoose = require("mongoose");

var recepientSchema = mongoose.Schema({
    bloodgroup: String,
    age: String,
    place: String,
    time: String
});

module.exports = mongoose.model("Recipient", recipientSchema);