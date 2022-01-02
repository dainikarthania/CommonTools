var bodyParser = require('body-parser')
var express = require('express')
 
var app = express()

app.use('/static', express.static('public'))

app.get('/sender', function (req, res) {
    res.sendfile('public/1.html')
})

app.listen(5001,()=>{
    console.log("server starting")
})