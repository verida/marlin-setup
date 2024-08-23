const express = require('express')
const https = require("https")
const fs = require("fs")
const app = express()


const PORT = process.env.SERVER_PORT ? process.env.SERVER_PORT : 5022;

const key = fs.readFileSync("./keys/server.key")
const cert = fs.readFileSync("./keys/server.cert")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

https.createServer(
  {
    key,
    cert
  },
  app
).listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
