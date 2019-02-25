var argv = process.argv.slice(2);
let http = require('http');
var concat = require('concat-stream');

var urls = [];
var data = [];
var count = 0;

argv.forEach((i) => {
    urls.push(i);
})

urls.forEach((i, indx) => {
    http.get(i, function(res){
        res.setEncoding('utf8');
        res.pipe(concat(function (req) {
            data[indx] = req;
            count++;
            if (count === urls.length) {
                console.log(data.join('\n'));
            }
        }))
    })
})


// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }
