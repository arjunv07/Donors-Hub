// ****************************************************************
// Application Packages required
// ****************************************************************
var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    Recepient = require("./models/recepient"),
    Donor = require("./models/donor"),
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
    res.render("static/index");   
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
app.get("/donor", function(req, res){
    Donor.find({}, function(err, alldonors){
        if(err){
            console.log(err);
        }else{
            res.render("donor/index", {donors: alldonors});
        }
    });
});

// ****************************************************************
// Donor's Details...(Dynamic)
// ****************************************************************
app.post("/donor", function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var mobile = req.body.mobile;
    var age = req.body.age;
    var gender = req.body.gender;
    var bloodgroup = req.body.bloodgroup;
    var available = req.body.available;
    var newDonor = {name: name, email: email, password: password, mobile: mobile, age: age, gender: gender, bloodgroup: bloodgroup, available: available};
    // console.log(name + email + password + mobile + age + gender + bloodgroup + available);
    Donor.create(newDonor, function(err, pushed){
        if(err){
            console.log(err);
        }
        else{
            res.redirect(301, "/donor");
        }
    });
});
// ****************************************************************
// Form for adding Donor's Detail
// ****************************************************************
app.get("/new", function (req, res) {
    res.render("donor/new");
});

// ****************************************************************
// For request Page...(Dynamic)
// ****************************************************************
app.get("/recepient", function(req, res){
    Recepient.find({}, function (err, allrecepient) {
        if (err) {
            console.log(err);
        } else {
            res.render("recepient/index", { recepients: allrecepient })
        }
    });
});

app.post("/recepient", function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var bloodgroup = req.body.bloodgroup;
    var age = req.body.age;
    var gender = req.body.gender;
    var place = req.body.place;
    var time = req.body.time;
    var newRecepient = {name: name, email: email, mobile: mobile, bloodgroup: bloodgroup, age: age, gender: gender, place: place, time: time}
    Recepient.create(newRecepient, function(err, pushed){
        if(err){
            console.log(err);
        }else{
            res.redirect(301, "/recepient");
        }
    });
});
// TODO: Added route to index page
app.post("/newr", function(req, res){
    res.render("recepient/new");
});

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
