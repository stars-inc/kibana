const express = require('express')
const cors = require('cors')
const data = require('../data/data.json')

const app = express()

app.use(cors())

app.get('/', (_, res) => {
  res.json(data)
})

module.exports = { express: app, data }