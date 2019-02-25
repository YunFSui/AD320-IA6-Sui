let http = require('http'),
    fs   = require('fs'),
    argv = process.argv.slice(2);

var file = argv[1];
// console.log(file)

server = http.createServer(function (req, res){
    fs.createReadStream(file).pipe(res);
});

server.listen(argv[0]);