// ****************************************************************
// MongoDb Schema
// ****************************************************************    
var mongoose = require("mongoose");

var donorSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    bloodgroup: {
        type: String,
        required: true
    },
    available: {
        type: String,
        required: true
    }
});

const user = module.exports = mongoose.model("Donor", donorSchema);