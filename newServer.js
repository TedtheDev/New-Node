'use strict'

//setup
var express = require('express');
var app = express();
var morgan = require('morgan');
var stylus = require('stylus');
var nib = require('nib');
var path = require('path');



// This must be BEFORE other app.use
//this function is to compile stylus file into css
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
    .set('compress', true)
    .import('nib');
}

//compile stylus
app.use(stylus.middleware({
  src: __dirname + '/resources',
  dest: __dirname + '/public',
  debug: true,
  force: true,
  compile: compile
}));
app.use(express.static('public'));

//set dev env
app.use(morgan('dev'));

//set jade as template engine
app.set('views', 'views');
app.set('view engine', 'jade');

//set directories for html and css
//app.use('/css', express.static('public/stylesheets'));
app.use('/angularjs', express.static('angularjs'));
app.use('/node_modules', express.static('node_modules'));
app.use('/views', express.static('views'));
app.use('/projects', express.static('views/projects'));
app.use('/projectfiles', express.static('projectfiles'));
app.use('/images', express.static('images'));

// landing page
app.get('/', function( req, res) {
  res.render('index');
});

app.get('/views/:name', function (req, res) {
  var name = req.params.name;
  res.render(__dirname + '/views/' + name);
});

app.get('/projects/:name', function (req, res) {
  var name = req.params.name;
  res.render(__dirname + '/views/projects/' + name);
});

app.get('*', (req, res) => {
    res.render(path.resolve(__dirname, '/views/index'));
});

var server_port = process.env.PORT || 8080;

//listening
app.listen(server_port, function() {
  console.log('Listening on ' + server_port);
});
