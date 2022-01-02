const AWS = require('aws-sdk')
const fs=require('fs');
// const { url } = require('inspector');
const { Readable } = require('stream');


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

  let file=fs.readFileSync('/home/sagar/Downloads/adding-interlligence-to-ineternet-using-satellite.doc')
  console.log(typeof file,file)
  const readable = Readable.from(file);
  
   this.s3 = new AWS.S3()
  
  readable.on('data', (chunk) => {
    let params = {
    Bucket: aws.bucket,
    Key: 'doc/demo.doc',
    Body: chunk,
    ContentType: 'application/msword'  };

    this.s3.upload(params,(err,imgData)=>{
    if(err){
      console.log("de",err)
    } else {
        console.log("dd",imgData)
    }
  })

  });


  // let base64=Buffer.from(file).toString("base64")
  // let pdf='data:application/pdf;base64,'+base64
  // fs.writeFileSync('demo.pdf',pdf)

  // // base64Data = data.replace(/^data:image\/(jpg|jpeg|png|pdf);base64,/, "")
  // // b = new Buffer(base64Data, 'base64')


  



  // this.s3 = new AWS.S3()
  // this.s3.upload(params,(err,imgData)=>{

  //   if(err){
  //     console.log("de",err)
  //   } else {
  //       console.log("dd",imgData)
  //   }
  // })

  let params2 = {
    Bucket:aws.bucket,
    Key: 'doc/demo.doc'
    };

  this.s3.getSignedUrl('getObject', params2, (err, signedurl)=>{
    console.log(err)
    console.log(signedurl)
  });


