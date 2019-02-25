let net = require('net'),
    argv = process.argv[2];

function zeroFill(n) { return n < 10 ? '0' + n : n} 

var server = net.createServer((socket) => {
    d = new Date();
    time = d.getFullYear() + '-'
         + zeroFill(d.getMonth() + 1) + '-'
         + zeroFill(d.getDate()) + ' '
         + zeroFill(d.getHours()) + ':'
         + zeroFill(d.getMinutes()) + '\n'
    socket.end(time);
})

server.listen(argv);

// var net = require('net')

// function zeroFill (i) {
//     return (i < 10 ? '0' : '') + i
// }

// function now () {
//     var d = new Date()
//     return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//     socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))