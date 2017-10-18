// Application Packages required
var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    app = express();

// App configuration
mongoose.connect("mongodb://localhost/donorshub");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

/*var donorSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    gender: String,
});*/ //TODO : Complete schema

// var DonorUser

// Index page
app.get("/", function(req, res){
    res.render("index");
});

//
app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/whocanhelp", function (req, res) {
    res.render("help");
});

// Server Configuration
app.listen("3000", function(){
  console.log("Server Running!!");
});
