//console.log(module.paths);

//var config = require("./package.json");
//var config1 = require("./global.json");

//console.log(config.name);
//console.log(config1.mysqldb);

var config2 = require(__dirname+'/global.json');
console.log(config2.mysqldb);