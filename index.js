const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(`Hi! Node.js version: ${process.version}`)
})

app.listen(8080)
