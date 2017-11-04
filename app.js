// ****************************************************************
// Application Packages required
// ****************************************************************
var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    app = express();

// ****************************************************************
// App configuration
// ****************************************************************
mongoose.connect("mongodb://localhost/donorshub");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// ****************************************************************
    // Index page...(Static)
// ****************************************************************    
app.get("/", function(req, res){
    // if(err){
    //     console.log("error");
    // }
    // else{
        res.render("static/index");
    // }
   
});

// ****************************************************************
    // About Page...(Static)
// ****************************************************************    
app.get("/about", function (req, res) {
    res.render("static/about");
});

// ****************************************************************
    // Who can Help Page...(Static)
// ****************************************************************
app.get("/whocanhelp", function (req, res) {
    res.render("static/help");
});

// ****************************************************************
    // Did you know Page...(Static)
// ****************************************************************
app.get("/fact", function (req, res) {
    res.render("static/did_you_know");
});

// ****************************************************************
    // Donation Type Page...(Static)
// ****************************************************************
app.get("/donation-type", function (req, res) {
    res.render("static/donation_type");
});

// ****************************************************************
    // Ethnic Blood-Group Page...(Static)
// ****************************************************************
app.get("/ethnic-group", function(req, res){
    res.render("static/ethnic_group");
});

// ****************************************************************
    // Tips Page...(Static)
// ****************************************************************
app.get("/tips", function (req, res) {
    res.render("static/tips");
});

// ****************************************************************
    // Gallery Page...(Dynamic)
// ****************************************************************
app.get("/gallery", function (req, res) {
    res.render("static/gallery");
});

// ****************************************************************
    // Admin Panel Page...(Master control and Dynamic)
// ****************************************************************
app.get("/admin", function(req, res){
    res.render("static/admin");
    console.log("Request for Admin Panel...");
}); 

// ****************************************************************
    // Request Page... (Dynamic) 
// ****************************************************************
// TODO: request page
app.get("/requests", function(req, res){
    res.send("Request page");
});

// TODO: Available people

// ****************************************************************
    // For unavailable URL requests
// ****************************************************************
app.get("*", function (req, res) {
    res.send("Sorry page not available!! Please check your URL");
    // res.render("static/404-page");
    // TODO: 404-PAGE RENDERING
});

// ****************************************************************
    // Server Configuration
// ****************************************************************
app.listen("3000", function(){
  console.log("Server Running!!");
});
