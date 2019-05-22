const express = require('express')
const moment = require('moment')

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => res.send(`Hello It's "${moment()}"`))

app.listen(port, () => console.log(`App is listening on port ${port}!`))