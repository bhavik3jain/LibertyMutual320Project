// Imports the express Node module.
var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')
var fs = require('fs')

// Creates an Express server.
var app = express();

// Support receiving text in HTTP request bodies
app.use(bodyParser.text());
// Support receiving JSON in HTTP request bodies
app.use(bodyParser.json());
app.use(cors());

// You run the server from `server`, so `../client/build` is `server/../client/build`.
// '..' means "go up one directory", so this translates into `client/build`!
app.use(express.static('../client/build'));

var mysql = require('mysql');

// SQL Server Configuration goes here
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

    console.log('The solution is: ', results.toString());

    res.set("Access-Control-Allow-Origin", "http://localhost:3002");
    res.send(results);
  });
});

app.post('/writefile', function(req, res){
  var user = req.body.trim();
  fs.writeFile('user.txt', user, (err) => {
    if (err) throw err;
  });
});

app.post('/readfile', function(req, res){
  fs.readFile('user.txt', 'utf8', (err, data) => {
    if (err) throw err;
    res.send({user_id: data});
  });
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
