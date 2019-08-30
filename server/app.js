require('dotenv').config();

var express = require('express'); //Points to the package in the JSON
var app = express(); //2
var test = require('./controllers/testcontroller')
var user = require('./controllers/usercontroller')
var sequelize = require('./db');

sequelize.sync();

// app.use('/api/test', function(req, res){
//     res.send("This is data from the /api/test endpoint. It's from the server.");
// });
app.use(express.json());

app.use('/test', test)

app.use('/api/user', user);






app.listen(3000, function(){
    console.log('App is listening on 3000.') 
});