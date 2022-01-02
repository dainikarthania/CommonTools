const express = require('express');
const app = express();
// const expressip = require('express-ip');
const PORT = process.env.PORT || 7000;
const path = require('path');
const request=require('request')

// app.use(expressip().getIpInfoMiddleware);

// const publicIp = require('public-ip');

// (async () => {
// 	console.log(await publicIp.v4());
// 	//=> '46.5.21.123'

// 	console.log(await publicIp.v6());
// 	//=> 'fe80::200:f8ff:fe21:67cf'
// })();


app.set("PORT", PORT);

app.get('/', async function (req, res) {
    // let ip=await publicIp.v4()
    // res.send({info:req.ipInfo,ip});
});

app.listen(app.get('PORT'), function () {
    console.log('Express started on http://localhost:' +
        app.get('PORT') + '; press Ctrl-C to terminate.');
});








