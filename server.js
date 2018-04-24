var express = require('express')
var app = express()
var port = process.env.PORT || 8080

app.get('/', function (request, response) {
  response.end('suuuuuuup')
})

app.listen(port)