var express = require('express');
var app = express();

console.log('Using directory:' + __dirname);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3500, function () {
  console.log('Example app listening on port 3500!');
});

app.use('/public', express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.status(404).send('Not Found 404: Sorry cant find that!');
});
