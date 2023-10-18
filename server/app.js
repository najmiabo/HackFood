if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const router = require('./routes')
const app = express()
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})