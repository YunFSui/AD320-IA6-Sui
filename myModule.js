let fs = require('fs');
let path = require('path');

 
function filter(folder, ext, callback){
    var ext = '.' + ext;

    fs.readdir(folder, function (err, files) {
        if (err) callback(err, null);
        else {
            result = [];
            files.forEach(function (file) {
                if (path.extname(file) === ext) {
                    result.push(file);
                }
            });
            callback(null, result);
        }
        
    });
}

module.exports = filter;