

const express = require('express')
const app = express()
const bot = require('./src/router/bot')
const port = process.env.PORT || 8080
app.use(bot)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
