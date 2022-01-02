var cookieParser = require('cookie-parser')
var csrf = require('csurf')
var bodyParser = require('body-parser')
var express = require('express')
 
// setup route middlewares
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })
 
// create express app
var app = express()
 
// parse cookies
// we need this because "cookie" is true in csrfProtection
app.use(cookieParser())
 
app.get('/form', csrfProtection, function (req, res) {
  // pass the csrfToken to the view
  res.render('send', { csrfToken: req.csrfToken() })
})
 
app.post('/process', parseForm, csrfProtection, function (req, res) {
  res.send('data is being processed')
})

app.listen(5001,()=>{
    console.log("server starting")
})