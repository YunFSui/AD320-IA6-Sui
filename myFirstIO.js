var argv = process.argv;
let fs   = require('fs');

let buf = fs.readFileSync(argv[2]);
let input = buf.toString();

var i = input.match(/\n/g);
console.log(i.length);

// // official solution
// var fs = require('fs')

// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)
