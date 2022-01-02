var bodyParser = require('body-parser')
var express = require('express')
 
var app = express()

app.use('/static', express.static('public'))

app.get('/received', function (req, res) {
    res.sendfile('public/2.html')
})
app.listen(5002,()=>{
    console.log("server starting")
})