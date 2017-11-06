var express = require("express");
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get("/donor", function (req, res) {
    Donor.find({}, function (err, alldonors) {
        if (err) {
            console.log(err);
        } else {
            res.render("donor/index", { donors: alldonors });
        }
    });
});

router.post("/donor", function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var mobile = req.body.mobile;
    var age = req.body.age;
    var gender = req.body.gender;
    var bloodgroup = req.body.bloodgroup;
    var available = req.body.available;
    var newDonor = { name: name, email: email, password: password, mobile: mobile, age: age, gender: gender, bloodgroup: bloodgroup, available: available };
    // console.log(name + email + password + mobile + age + gender + bloodgroup + available);
    Donor.create(newDonor, function (err, pushed) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect(301, "/donor");
        }
    });
});

router.get("/donor/show", function (req, res) {
    // Donor.findById(req.params.id).populate("donors").exec(function(err, founddonor){
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    res.render("donor/show");//, {donor: founddonor});
    // }
    // });
});

router.get("/new", function (req, res) {
    res.render("donor/new");
});
        

module.exports = router;