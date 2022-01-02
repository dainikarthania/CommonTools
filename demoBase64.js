var http = require('http');
var {Base64Encode} = require('base64-stream');
 
var img = 'http://farm3.staticflickr.com/2433/3973241798_86ddfa642b_o.jpg';

process.stdin.pipe(new Base64Encode()).pipe(process.stdout);


// http.get(img, function(res) {
//     if (res.statusCode === 200)
//     res.pipe(new Base64Encode()).pipe(process.stdout);
// })