// // // // // let media=[
// // // // //     {
// // // // //       "name": "Wizard GIFs - Get the best GIF on GIPHY",
// // // // //       "permission": 3,
// // // // //       "username": "Dainik",
// // // // //       "id": 402,
// // // // //       "channel_name": null,
// // // // //       "key":"SxeIR0"
// // // // //     }
// // // // //   ]
// // // // //   let details=[
// // // // //     {
// // // // //       "id": 2057,
// // // // //       "data": {},
// // // // //       "subject_id": "SxeIR0",
// // // // //       "type": "media_create",
// // // // //       "activity_type": "create",
// // // // //       "receipent": {
// // // // //         "type": "f"
// // // // //       },
// // // // //       "actor": 402,
// // // // //       "actors": null,
// // // // //       "createdAt": "2021-01-19T12:35:39.417Z",
// // // // //       "updatedAt": "2021-01-19T12:35:39.417Z"
// // // // //     }
// // // // //   ]

// // // // //   media.map(m=>{
// // // // //     let updated=details.find(d=>{
// // // // //       console.log(d)
// // // // //       console.log(m)
// // // // //     if(d.subject_id==m.key){
// // // // //     return d
// // // // //     }
// // // // //     })
// // // // //     m.updated=updated.updatedAt
// // // // //     })
// // // // //     console.log(media)


// // // // var jwt = require('jsonwebtoken');

// // // // let token=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozOTEsInVzZXJuYW1lIjoibmlkaGkiLCJuYW1lIjoiTmlkaGkgVmFyaXlhIiwicm9sZSI6MywiZW1haWwiOiJuaWRoaUBqc2JvdC5pbyIsImFjdGl2ZSI6MSwidmVyaWZpZWQiOnRydWUsInNlY3JldF90b2tlbiI6bnVsbCwidXNlcmlkIjozOTEsImRvYiI6IjIwMDAtMTEtMTUiLCJwcm9maWxlcGljIjoiaHR0cHM6Ly9zdXJ1c2VmaWxlcy12MS5zMy51cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9wcm9maWxlcGljL2Y5eEJVNC5zdmc_QVdTQWNjZXNzS2V5SWQ9QUtJQUk1WTRWN0NJT0FaUjVaREEmRXhwaXJlcz0xNjExMzIxMzcwJlNpZ25hdHVyZT1VdCUyRmhDV3V3QndSQW15TEYlMkZ0a2wzS2EyVlFNJTNEIiwiZ2VuZGVyIjoiRiIsImNvdW50cnkiOiJJTiIsInN0YXRlIjoiR0oiLCJjaXR5IjoiU3VyYXQiLCJzdGF0dXMiOiJNIiwibGFzdGFjdGl2aXR5IjoiMjAyMS0wMS0xOVQxMjozMDowOC4wMDBaIiwidG90YWxoZWFydHMiOjUsImZvbGxvd2VycyI6MywiZm9sbG93aW5nIjoxNywidG90YWxsaWtlcyI6MTU0LCJ0b3RhbGZvY3VzIjowLCJ0b3RhbHZpc2l0cyI6MCwidG90YWxzdHJlYW1zIjo1OCwidG90YWxoaXRzIjo0LCJ0b3RhbG1lZGlhcyI6NzAsInRvdGFsZ3JvdXBzIjoxMSwidG90YWxoZWFydGVkY29udGVudHMiOjEzNCwiYXV0b3JlbmV3YWwiOnRydWUsInN0cmlwZV9jdXN0X2lkIjoiY3VzX0lNR1lCUUJ2bjRvUVEwIiwibG9jYXRpb24iOiJDaGlrdXZhZGksIEthdGFyZ2FtLCBTdXJhdCwgR3VqYXJhdCAzOTUwMDQsIEluZGlhIiwicHJpdmFjeSI6InB1YmxpYyIsImxhdCI6MjEuMjIxNDQ4NCwibG5nIjo3Mi44MjY5NTY0LCJwcmVtaXVtdHlwZSI6MiwidXNlcl91cmwiOiJodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pbyIsInRvcGljcyI6bnVsbCwiZmF2b3VyaXRlX3RvcGljcyI6eyI1MyI6W10sIjU0IjpbXSwiNTciOltdLCI1OCI6W10sIjYwIjpbXSwiNjIiOltdLCI2OSI6W10sIjcxIjpbXSwiNzIiOltdLCI3NCI6W10sIjc1IjpbXSwiNzYiOltdLCI3NyI6W10sIjc5IjpbXX0sInByaXZhY3lfc2V0dGluZyI6eyJ3aG9fY2FuX2NvbW1lbnQiOiJhbnltZW1iZXIiLCJoaWRlX2Zyb21fc2VhcmNoIjoibm8iLCJ3aG9fY2FuX3NlZV93aGF0Ijp7ImRvYiI6ImFueW9uZSIsIm5hbWUiOiJhbnlvbmUiLCJlbWFpbCI6ImFueW9uZSIsImxvY2F0aW9uIjoiYW55b25lIn0sImZvbGxvd2Vyc19zZXR0aW5ncyI6ImF1dG9tYXRpY2FsbHlfYWNjZXB0IiwiaGlkZV9wcm9maWxlX2Zyb21fc2VhcmNoIjoibm8iLCJ3aG9fY2FuX2FkZF90b19zaGFyZWRfc3RyZWFtIjoiZm9sbG93Iiwid2hvX2Nhbl9zZWVfeW91cl9wdWJsaWNfY29udGVudCI6ImFueW9uZSIsImFsbG93X290aGVyc190b19zaGFyZV95b3VyX2NvbnRlbnRzIjoieWVzIn0sImNyZWF0ZWRBdCI6IjIwMTktMTItMTBUMTE6Mzk6MDMuMDQxWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDEtMTlUMTI6MzA6MDguMTcyWiIsImZhdm91cml0ZV90b3BpY3NfZXhpc3QiOnRydWUsInBsYW4iOnsibmFtZSI6ImJ1c2luZXNzIiwidHlwZSI6InByZW1pdW0iLCJ2YWxpZF9mcm9tIjoiMjAyMC0xMS0wOVQxMDo1NDo0Mi4wMDBaIiwidmFsaWRfdG8iOiIyMDIxLTExLTA5VDEwOjU0OjQyLjAwMFoiLCJjaGFyZ2VfYW1vdW50Ijo4MCwibmV4dF9iaWxsaW5nX2RhdGUiOiJOb3YgMTksMjAyMSIsIm1vbnRocyI6MTMsImxhc3RfYmlsbGVkX3dpdGgiOiJCaWxsZWQgd2l0aCBWaXNhKioqKjQyNDIifSwic3VwZXJfdXNlcl9zdGF0dXMiOjEsInVzZWRGcmVlUHJlbWl1bSI6dHJ1ZSwiY2hhbm5lX2lkIjoxLCJDaGFubmVsRXhpc3RzIjp0cnVlLCJzdHJpcGVfYWNjb3VudF9pZCI6ImFjY3RfMUdZdHY5QTk2NTh2UnN0NCIsInN1cGVyX3VzZXJfZWxpZ2libGUiOmZhbHNlLCJpc3ByZW1pdW0iOnRydWUsInByb2ZpbGVwaWNwYXRoIjoicHJvZmlsZXBpYy9mOXhCVTQuc3ZnIn0sImlhdCI6MTYxMTIzNDk3MCwiZXhwIjoxNjEyMDk4OTcwLCJhdWQiOiJsb2NhbGhvc3QiLCJpc3MiOiJsb2NhbGhvc3QifQ.UU8AnGMS9dBS5SXjRNuJ3zL3RbSnBUSlLAoe0Zumoms`

// // // // jwt.verify(token, 'mysurusesecuretoken', function(err, decoded) {
// // // //   console.log(decoded.user) // bar
// // // // });



// // // let request=require('request')

// // // let url=`https://play-lh.googleusercontent.com/XH57qG2waM-VwmCGBd-V8G6MwP78195G4yPJ7USyO1P5yTjFcbBSnyAMYVL2KOLC_A=w412-h220-rw`

// // // request.get(url,(err,res,data)=>{
// // //   console.log(res.headers)
// // // })

// // // // const axios = require('axios');
// // // // let fs=require('fs')
// // // // let url=`https://www.google.com/searchbyimage?site=search&sa=X&image_url=https://albuquerque.momcollective.com/wp-content/uploads/2017/03/Life-is-not-a-race-300x200.jpg`

// // // // axios.get(url).then(value=>{
// // // //   console.log('statusCode:', value); // Print the response status code if a response was received
// // // // });


// // // var request = require("request")
// // let url=`https://static.wikia.nocookie.net/aesthetics/images/a/af/Winter2.jpg/revision/latest?cb=20200810230734`
// // // var FileReader = require('filereader')
// // //   , fileReader = new FileReader()
// // //   ;
 

// // //   fileReader.readAsDataURL(new File(url));
// // //   fileReader.onloadend = function() {
// // //     const base64data = fileReader.result;
// // //     console.log(base64data);
// // //    };
 

// // let axios=require('axios')
// // // let sharp=require('sharp')


  axios.get(url, {
    responseType: 'arraybuffer',
  }).then(value=>{
            let data = "data:" + value.headers["content-type"] + ";base64," + Buffer.from(value.data).toString('base64');
            console.log(data)
  })









// // // const reader = new FileReader();
// // //   reader.readAsDataURL(url);
// // //   reader.onloadend = function() {
// // //    const base64data = reader.result;
// // //    console.log(base64data);
// // //   };



// //       // request.get(url, function (error, response, body) {
// //       //     if(error) console.log(error)
// //       //     if (!error && response.statusCode == 200) {
            
// //       //       let data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
// //       //       console.log(data)
// //       //     }
// //       //   });
// //       // const nvt = require('node-virustotal');
// //       // const defaultTimedInstance = nvt.makeAPI();
// //       // const hashed = nvt.sha256('http://wikionemore.com/');
// //       // const theSameObject = defaultTimedInstance.reAnalyzeURL(hashed, function(err, res){
// //       //   if (err) {
// //       //     console.log('Well, crap.');
// //       //     console.log(err);
// //       //     return;
// //       //   }
// //       //   console.log(JSON.stringify(res));
// //       //   return;
// //       // });
// //       // import axios from "axios";

// // const options = {
// //   method: 'GET',
// //   url: 'https://virus-checker.p.rapidapi.com/rapidapi/virusscan/rapidapitoken123456',
// //   params: {urladdress: 'http%3A%2F%2Fwww.eicar.org%2Fdownload%2Feicar.com.txt'},
// //   headers: {
// //     'x-rapidapi-key': '629b6286e5msh1633f972b2b20eap18899ajsncefff186c13e',
// //     'x-rapidapi-host': 'virus-checker.p.rapidapi.com'
// //   }
// // };

// // axios.request(options).then(function (response) {
// // 	console.log(response.data);
// // }).catch(function (error) {
// // 	console.error(error);
// // });
// let apikey=`2ae8e75e728550f1e82aec5acd8b46eeff3ab375538f13e735aad306b0528266`

// const nvt = require('node-virustotal');
// const defaultTimedInstance = nvt.makeAPI();
// const theSameKey = defaultTimedInstance.setKey(apikey);

// const hashed = nvt.sha256('http://fantasticfilms.ru');
// const theSameObject = defaultTimedInstance.urlLookup(hashed, function(err, res){
//   if (err) {
//     console.log('Well, crap.');
//     console.log(err);
//     return;
//   }
//   console.log(JSON.stringify(res));
//   return;
// });

// const got = require('got')
// const metascraper = require('metascraper')([
//   // require('metascraper-author')(),
//   // require('metascraper-date')(),
//   //require('metascraper-description')(),
//   require('metascraper-image')(),
//   require('metascraper-logo')(),
//   require('metascraper-logo-favicon')(),
//   // require('metascraper-clearbit-logo')(),
//   // require('metascraper-publisher')(),
//   require('metascraper-title')(),
//   require('metascraper-url')()
// ])

// async function scraper(targetUrl){
//   const {body: html, url} = await got(targetUrl,{timeout:5000})
//   let data = await Promise.all([
//     //get meta-data
//     new Promise(async (rs, rj) => {
//       try {
//         const metadata = await metascraper({html, url})
//         rs(metadata)
//       } catch (e) {
//         rs(e)
//       }
//     })
//     /*//get keywords using cheerio
//     new Promise((rs,rj)=>{
//       //const $ = cheerio.load(html);
//       let keywords = html('meta[name="keywords"]').attr('content')
//       return rs(keywords || [])
//     })*/
//   ])

//   let metadata =Object.assign({}, data[0])

//   console.log(`metadata`, metadata)
// }

// scraper("https://www.amazon.in/Air-Conditioners-5-Star-Large-Appliances/s?rh=n%3A3474656031%2Cp_n_feature_twelve_browse-bin%3A2753037031")

