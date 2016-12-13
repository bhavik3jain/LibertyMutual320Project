// Imports the express Node module.
var express = require('express');
var bodyParser = require('body-parser')

// Creates an Express server.
var app = express();

// Support receiving text in HTTP request bodies
app.use(bodyParser.text());
// Support receiving JSON in HTTP request bodies
app.use(bodyParser.json());

// You run the server from `server`, so `../client/build` is `server/../client/build`.
// '..' means "go up one directory", so this translates into `client/build`!
app.use(express.static('../client/build'));

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'theberg.cx0wblasak2z.us-west-2.rds.amazonaws.com',
  user     : 'admin',
  password : '12345678',
  database : 'libdb'
});


app.post('/sql_request', function(req, res){
  var queryText = req.body.trim();

  connection.query(queryText, function(err, results) {
    if (err) res.send("An error has occured" + err.toString());

    console.log('The solution is: ', results[0]);

    res.send(results);
  });

});

app.put('/sql_end', function(req, res) {
  connection.end();
  console.log("Sql connection ended");

  res.status(200).end();
});

app.put('/sql_connect', function(req, res) {
  connection.connect();
  console.log("Sql connection established");

  res.status(200).end();
});

  /**
  * Translate JSON Schema Validation failures into error 400s.
  Must go after all routes
  */
  app.use(function(err, req, res, next) {
    if (err.name === 'JsonSchemaValidation') {
      // Set a bad request http response status
      res.status(400).end();
    } else {
      // It's some other sort of error; pass it to next error middleware handler
      next(err);
    }
  });

  // Starts the server on port 3000!
  app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
  });
