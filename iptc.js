var iptc = require('node-iptc')
let fs=require('fs')
var request = require('request');
var Jimp = require('jimp');
var ExifImage = require('exif').ExifImage;
// var im = require('imagemagick');
// im.readMetadata('Image1.jpg', function(err, metadata){
//   if (err) throw err;
//   console.log('Shot at '+JSON.stringify(metadata.exif));
// })

// fs.readFile("Image1.jpg", function(err, data) {
//   if (err) { throw err }
//   var iptc_data = iptc(data);
//   console.log(iptc_data)
// });

try {
  new ExifImage({ image : 'Image1.jpg' }, function (error, exifData) {
      if (error)
          console.log('Error: '+error.message);
      else
          console.log(exifData); // Do something with your data!
  });
} catch (error) {
  console.log('Error: ' + error.message);
}


// Jimp.read('https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg')
//   .then(image => {

//     let str = image.toString('base64')
//     data = Buffer.from(str, 'base64');

//     var iptc_data = iptc(data);
//     console.log(iptc_data)
//   })
//   .catch(err => {
//     console.log(err)
//   });


// request.get("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",(err,responce,body)=>{
//   // console.log("err",err)
//   // console.log("responce",responce)
// // fs.ReadStream(body, function(err, data) {
// //     if (err) { throw err }
// //     var iptc_data = iptc(data);
// //     console.log(iptc_data)
// //   });
// })
