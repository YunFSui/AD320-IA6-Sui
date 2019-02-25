let http = require('http'),
    map   = require('through2-map'),
    port = process.argv[2];

uC = map((data) => {
    return data.toString().toUpperCase();
});

server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(uC).pipe(res);
    }
});

server.listen(port);