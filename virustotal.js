// const nvt = require('node-virustotal');
// const defaultTimedInstance = nvt.makeAPI();
// const theSameKey = defaultTimedInstance.setKey('2ae8e75e728550f1e82aec5acd8b46eeff3ab375538f13e735aad306b0528266');
// const hashed = nvt.sha256('http://wikionemore.com/');
// const theSameObject = defaultTimedInstance.reAnalyzeURL(hashed, function(err, res){
//   if (err) {
//     console.log('Well, crap.');
//     console.log(err);
//     return;
//   }
//   console.log(JSON.stringify(res));
//   return;
// });


const sharp = require('sharp');
let request=require('request')

let url=`https://www.gstatic.com/identity/boq/policies/privacy/privacy_illustration.svg`
request.get(url, function (error, response, body) {
  if(error) console.log(error)
  if (!error && response.statusCode == 200) {
    let data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
    console.log(data)
    let decodedData = decodeURIComponent(data)
    let svgtext = data.replace('data:image/svg+xml;base64,', "")
    console.log(svgtext)
    // let base64Data = (new Buffer(svgtext)).toString('base64')
    let b = new Buffer(svgtext, 'base64')
    sharp(b).png()
.toBuffer().then(value=>{
  console.log(value)
})
  }
});
