var express = require("express"),
    http    = require("http");

/**
 * Config
 */
var app = express();
var assets = ["data", "src"];


/**
 * Static Asset Server
 */
for (var i=0; i<assets.length; i++) app.use(express.static(__dirname + '/' + assets[i]));

console.log("Serving assets from:", __dirname + '/' + assets);
app.listen(3000, function() {
  console.log("Server started");
});
