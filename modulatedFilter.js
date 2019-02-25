let fl = require('./myModule');
var argv = process.argv;

var folder = argv[2];
var ext    = argv[3];

fl(folder, ext, function(err, files){
    for (i = 0; i < files.length; i++){
        console.log(files[i]);
    }
});