var express = require("express");
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get("/", function (req, res) {
    res.render("static/index");
});

router.get("/about", function (req, res) {
    res.render("static/about");
});

router.get("/whocanhelp", function (req, res) {
    res.render("static/help");
});

router.get("/fact", function (req, res) {
    res.render("static/did_you_know");
});

router.get("/donation-type", function (req, res) {
    res.render("static/donation_type");
});

router.get("/ethnic-group", function (req, res) {
    res.render("static/ethnic_group");
});

router.get("/tips", function (req, res) {
    res.render("static/tips");
});

router.get("/gallery", function (req, res) {
    res.render("static/gallery");
});

router.get("/admin", function (req, res) {
    res.render("static/admin");
    console.log("Request for Admin Panel...");
}); 


module.exports = router;