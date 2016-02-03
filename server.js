var express  = require('express');
var morgan  = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs  = require('ejs');
var ejsmate  = require('ejs-mate');

var User  = require('./models/user');

var app  = express();

mongoose.connect('mongodb://root:abc123@ds055515.mongolab.com:55515/kentest', function(err){
  if (err){
    console.log(err);
  } else {
    console.log('Connected to the database');
  }
});

// middelware  - shows routes hit
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');

app.post('/create-user', function(req, res, next){
  var user  = new User();

  user.profile.name  = req.body.name;
  user.password  = req.body.password;
  user.email  = req.body.email;

  user.save(function(err){
    if (err) return next(err);
    res.json('successfully created new user');
  });
});

app.get('/', function(reg, res){
  res.render('home');
});




app.listen(3000, function(err){
  if (err) throw err;
  console.log("Server is running on port 3000");
});
