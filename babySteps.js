var argv = process.argv;

var x = 0;
for(i = 2; i <argv.length; i++){
    x += Number(argv[i]);
}
console.log(x);