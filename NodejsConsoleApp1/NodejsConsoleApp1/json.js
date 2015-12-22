//var s = '{\r\n"x":1,"y":"2","z":"3"}';
//var o = JSON.parse(s);

//console.log(o.x);
//console.log(o.y);
//console.log(o.z);

var fs = require("fs");
var s2 = fs.readFileSync('package.json');
if (s2[0].toString(16) == 'ef' && s2[1].toString(16) == 'bb' && s2[2].toString(16) == 'bf') {
    s2 = s2.toString('utf-8', 3);
} else {
    s2 = s2.toString('utf-8');
}

console.log(s2);

var o2 = JSON.parse(s2);
console.log(o2.name);

