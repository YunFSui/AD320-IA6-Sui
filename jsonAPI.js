let http = require('http'),
    url   = require('url'),
    port = process.argv[2];

server = http.createServer(function (req, res){
    var route = url.parse(req.url, true);
    var d     = new Date(route.query.iso);
    var resCode = 404;
    var resHeader = {};
    var response  = 'Server Not Found\n';

    if (req.method !== 'GET') {
        resCode = 400;
        resHeader = {'content-type' : 'text/plain'};
        response = 'GET request only\n';
    }

    if (route.pathname === '/api/parsetime') {
        resCode = 200;
        resHeader = {'content-type' : 'application/json'};
        response = {
            "hour": d.getHours(),
            "minute": d.getMinutes(),
            "second": d.getSeconds()
        };
    }

    if (route.pathname === '/api/unixtime'){
        resCode = 200;
        resHeader = {'content-type' : 'application/json'};
        response = {
            'unixtime': d.getTime()
        };
    }

    res.writeHead(resCode, resHeader);
    return res.end(JSON.stringify(response));
});

server.listen(port);

// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
