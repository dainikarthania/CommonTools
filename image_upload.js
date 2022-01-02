var express = require('express')
var bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
var app = express()
const AWS = require('aws-sdk')
const fs=require('fs');
const axios = require('axios');
const FormData = require('form-data');

// const { url } = require('inspector');
const { Readable } = require('stream');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(fileUpload())


    let   aws = {
    accessKeyId     : "AKIAI5Y4V7CIOAZR5ZDA",
    secretAccessKey : "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",
    region : "us-west-2",
    bucket : "surusefiles-v1"  //Old-name surusefiles
  }

  AWS.config.update({
    accessKeyId: aws.accessKeyId,
    secretAccessKey: aws.secretAccessKey,
    region: aws.region || 'us-east-1'
  });


app.post('/imageupload',(req,res)=>{
    // const readable = Readable.from(req.files.file.data.data);

    console.log(req.files.file)
data = new FormData();
data.append('media',req.files.file);
data.append('models', 'nudity,wad,offensive,scam,gore');
data.append('api_user', '296916707');
data.append('api_secret', 'rpm8pLzPczSiCb934s5b');

axios({
  method: 'post',
  url:'https://api.sightengine.com/1.0/check.json',
  data: data,
  headers: data.getHeaders()
})
.then(function (response) {
  // on success: handle response
  console.log(response.data);
})
.catch(function (error) {
  // handle error
  if (error.response) console.log("dd",error.response.data);
  else console.log("dd",error.message);
});


    console.log(req.files)
    console.log(req.body)

    res.send("he;l")

  //  this.s3 = new AWS.S3()      
  //   let params = {
  //           Bucket: aws.bucket,
  //           Key: `files/${req.files.file.name}`,
  //           Body: req.files.file.data,
  //           ContentType: req.files.file.mimetype  
  //       };
        
  //      this.s3.upload(params,(err,imgData)=>{
  //           if(err){
  //               return res.send(err)
  //           } else {
  //               return res.send(imgData)
  //           }
  //         })
      
        
})

app.post('/getimage',(req,res)=>{
    let params2 = {
        Bucket:aws.bucket,
        Key: req.body.filename
        };
    
      this.s3.getSignedUrl('getObject', params2, (err, signedurl)=>{
        return res.send(signedurl)
      });
    
})

app.listen("5000",()=>{
    console.log("server is starting")
})