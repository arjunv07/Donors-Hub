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

// TODO: 
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

app.get("/fact", function (req, res) {
    res.render("did_you_know");
});

app.get("/donation-type", function (req, res) {
    res.render("donation_type");
});

app.get("/ethnic-group", function(req, res){
    res.render("ethnic_group");
});

app.get("/tips", function (req, res) {
    res.render("tips");
});

app.get("/gallery", function (req, res) {
    res.render("gallery");
});

// Server Configuration
app.listen("3000", function(){
  console.log("Server Running!!");
});
