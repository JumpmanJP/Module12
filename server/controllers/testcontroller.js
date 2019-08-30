var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

// router.get('/', function(req,res){
//     res.send('Greetings Earthling. This is a test route.');
// });

// router.get('/about', function (req,res){
//     res.send('This is an about route');
// })

// router.get('/contact', function (req, res){
//     res.send({user: "JP", email: "jp@dirtbikekid.com"});
// });

// router.get('/projects', function(req,res){
//     res.send(['Project 1', 'Project 2']);
// });

// router.get('/mycontacts', function (req, res) {
//     res.send([
//         {user: "Stephen", email: "steve@dbk.com"},
//         {user: "Carolyn", email: "car@dbk.com"},
//         {user: "mom", email: "mom@dbk.com"},
//         {user: "dad", email: "dad@dbk.com"}
//     ]);
// });

router.post('/one', function(req, res){
    res.send("Test 1 complete.")
});

router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two.";

    TestModel
        .create({
            testdata: testData
    }).then(dataFromDatabase => {
        res.send("Test two went through!")
    })
});

router.post('/three', function(req,res){
    var testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    res.send("Test three went through!")
    console.log("Test three went through!")
});

router.post('/four', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message() {
                res.send("Test 4 went through!");
            }
        );
});

router.post('/five', function (req,res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(data) {
                res.send("Test five went through!");
            }
        );
});

router.post('/six', function(req, res) {
    var testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message(testdata) {
            res.json({
                testdata: testdata
            });
        }
    );
});

router.post('/seven', function (req,res) {
    var testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    .then(
        function createSuccess(testdata) {
            res.json({
                testdata: testdata
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});

module.exports = router;