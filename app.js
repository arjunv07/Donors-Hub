// ****************************************************************
// Application Packages required
// ****************************************************************
var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    donor = require("./routes/donor"),
    static = require("./routes/static"),
    recepient = require("./routes/donor");
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
app.use("/", static);
   
// ****************************************************************
    // About Page...(Static)
// ****************************************************************    
app.use("/about", static);

// ****************************************************************
    // Who can Help Page...(Static)
// ****************************************************************
app.use("whocanhelp", static);

// ****************************************************************
    // Did you know Page...(Static)
// ****************************************************************
app.get("/fact", static);

// ****************************************************************
    // Donation Type Page...(Static)
// ****************************************************************
app.get("/donation-type", static);

// ****************************************************************
    // Ethnic Blood-Group Page...(Static)
// ****************************************************************
app.get("/ethnic-group", static);

// ****************************************************************
    // Tips Page...(Static)
// ****************************************************************
app.get("/tips", static);

// ****************************************************************
    // Gallery Page...(Dynamic)
// ****************************************************************
app.get("/gallery", static);

// ****************************************************************
    // Admin Panel Page...(Master control and Dynamic)
// ****************************************************************
app.get("/admin", static); 

// ****************************************************************
    // Request Page... (Dynamic) 
// ****************************************************************
app.get("/donor",donor);

// ****************************************************************
// Donor's Details...(Dynamic)
// ****************************************************************
app.post("/donor", donor);

app.get("/donor/show",donor);
// ****************************************************************
// Form for adding Donor's Detail
// ****************************************************************
app.get("/new", donor);


// ****************************************************************
// For request Page...(Dynamic)
// ****************************************************************
app.get("/recepient", recepient);

app.post("/recepient", recepient);

app.get("/newr", recepient);

// app.get("/recepient/:id", function () {
//     Donor.findById(req.params.id).populate("recepients").exec(function (err, foundrecepient) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.render("recepient/show", {recepient : foundrecepient});
//         }
//     });
// });

// app.get("/login", function(req, res){
    
// });

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
