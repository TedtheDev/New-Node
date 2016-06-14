//decalre varaibles
var express = require('express');
var app = express();

//set jade as template engine
app.set('view engine', 'jade');

//set directories for html and css
app.use('/html', express.static('helloWorld'));
app.use('/css', express.static('css'));

//get landing page
app.get('/html/', function( req, res) {
  res.render('helloWorldJade');
  //res.send('Hello World!@!@!');
});

//run server and listen
app.listen(3000, function() {
  console.log('Listening on 3000');
}); 
