var util = require('util');

var name = "Silvio";
var greeting = util.format('Hello, %s', name);

util.log(greeting);