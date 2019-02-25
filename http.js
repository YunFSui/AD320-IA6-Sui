var argv = process.argv;
let http = require('http');

http.get(argv[2], function(res){
    res.setEncoding('utf8');
    res.on("data", function(data) {
        console.log(data);
    })
}).on('error', function(e){
    console.log("Got error: " + e.massage);
});