/**
 * Created by Anton on 05.10.16.
 */
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express().use(express.static(
    path.join(__dirname, '')
));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/getUsers', function(req, res, next) {
  fs.readFile('assets/JSON/usersList.json','utf8', function(err, contents) {
    res.json(contents);
  });
})
app.post('/postUsers', function(req, res) {
    console.log(req.body);
    var data = req.body;
    fs.writeFile('assets/JSON/usersList.json', JSON.stringify(data, null, 4), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("JSON saved");
      }
    });
  });


app.listen(8084);
