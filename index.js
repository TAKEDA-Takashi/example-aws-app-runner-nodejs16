const { setTimeout: sleep } = require("timers/promises")

const express = require('express')
const app = express()

app.get('/', async (req, res) => {
  await sleep(100)
  res.send(`Hi! Node.js version: ${process.version}`)
})

app.listen(8080)
