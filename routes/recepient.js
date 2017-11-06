var express = require("express");
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get("/recepient", function (req, res) {
    Recepient.find({}, function (err, allrecepient) {
        if (err) {
            console.log(err);
        } else {
            res.render("recepient/index", { recepients: allrecepient })
        }
    });
});

router.post("/recepient", function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var bloodgroup = req.body.bloodgroup;
    var age = req.body.age;
    var gender = req.body.gender;
    var place = req.body.place;
    var time = req.body.time;
    var newRecepient = { name: name, email: email, mobile: mobile, bloodgroup: bloodgroup, age: age, gender: gender, place: place, time: time }
    Recepient.create(newRecepient, function (err, pushed) {
        if (err) {
            console.log(err);
        } else {
            res.redirect(301, "/recepient");
        }
    });
});

router.get("/newr", function (req, res) {
    res.render("recepient/new");
});

module.exports = router;