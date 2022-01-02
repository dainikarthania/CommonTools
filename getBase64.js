const axios = require('axios'); //you can use any http client
const fs=require('fs')
const request = require('request'); //you can use any http client


        axios.get(`https://pa1.narvii.com/6437/9e2716536bb2c0a48370bd282477293735a68247_hq.gif`, {
          responseType: 'arraybuffer',
        }).then(response=>{
            let data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(response.data).toString('base64');
            fs.writeFileSync("programming.txt", data);
            // console.log(data)
        })

        // axios.request({
        //     url: "https://api.thenounproject.com/icons/batman",
        //     method: "GET",
        //     auth: {
        //       client_id: "252c9c281d894f00b0d22130e93f5b98", // This is the client_id
        //       client_secret: "69648142e9cb4c1c8399707b4c3a25cc" // This is the client_secret
        //     },
        //     data: {
        //       "grant_type": "client_credentials",
        //       "scope": "public"    
        //     }
        //   }).then(respose => {
        //     console.log(respose);  
        //   }); 
      //   let oauth = {
      //     consumer_key: `252c9c281d894f00b0d22130e93f5b98`,
      //     consumer_secret: `69648142e9cb4c1c8399707b4c3a25cc`
      // }
      //   let url=`https://api.thenounproject.com/icons/batman`
      //   request.get({
      //     url: encodeURI(url),
      //     oauth: oauth
      // }, function (err, response, body) {
      //     if (err) {
      //       console.log(err)
      //     } else {
      //       console.log(body)
      //     }
      // });