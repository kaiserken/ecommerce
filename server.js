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
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');

var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/user');
app.use(mainRoutes);
app.use(userRoutes);








app.listen(3000, function(err){
  if (err) throw err;
  console.log("Server is running on port 3000");
});
