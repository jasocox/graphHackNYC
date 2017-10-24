var express = require("express"),
    http    = require("http"),
    cypher = require('cypher-stream')('bolt://34.228.185.57/', 'neo4j', 'Gateway2');;

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

/**
 * API
 */
app.get('/impacts', function(req, res) {
  var data = [];

  cypher(
    'MATCH (n:Impacts)\n' +
    'WHERE n.PeriodStart <= "2117"\n' +
    'AND n.PossibleImpacts >= "1"\n' +
    'RETURN n.ObjectName AS name, n.PeriodStart AS start, n.PossibleImpacts AS possibility\n' +
    'ORDER BY toInteger(n.PossibleImpacts) DESC'
  )
  .on('data', function (result) {
    data.push(result);
  })
  .on('end', function () {
    res.send(JSON.stringify(data));
  });
});

/**
 * Server
 */
app.listen(3000, function() {
  console.log("Server started");
});
