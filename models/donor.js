// ****************************************************************
// MongoDb Schema
// ****************************************************************    
var mongoose = require("mongoose");

var donorSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: String,
    age: String,
    gender: String,
    bloodgroup: String,
    available: String
});

module.exports = mongoose.model("Donor", donorSchema);