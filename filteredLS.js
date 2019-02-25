let fs = require('fs');
let path = require('path');
var argv = process.argv;

fs.readdir(argv[2], (err, list) => {
    if (err) throw err;
    list.forEach(file => {
        var ext = '.' + argv[3];
        if(path.extname(file) === ext){
            console.log(file);
        };
    });

})

// // official
// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })