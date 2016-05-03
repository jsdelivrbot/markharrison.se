
var express = require('express'),
  config = require('./config/config');
var app = express();

require('./config/express')(app, config);

// Not Found handler
app.use(function(req, res, next){
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write("<h2>The requested resource is not available.</h2>");
  res.write("Request received on port " + process.env.PORT + "<br>");
  res.write("Request URL: " + req.url + "<br>");
  res.write("Deploy Path: " + deployPath + "<br>");
  res.end('[iisnode version is ' + process.env.IISNODE_VERSION + ', node version is ' + process.version + ']');
});

// Server creation
app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});