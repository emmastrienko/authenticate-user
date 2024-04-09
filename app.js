const express = require('express')
const app = express()
const config = require('./config')
const authRouter = require('./src/aunthentication')
const userRouter = require('./src/Users')
const verifyAuth = require('./src/aunthentication/authMiddleware')
const dateFormat = require('date-format')
const morgan = require('morgan')

app.use(express.json())
morgan.token('time',()=> dateFormat.asString(dateFormat.ISO8601_FORMAT,new Date()))

app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

app.use('/auth', authRouter)
app.use('/users',verifyAuth,userRouter)


const server = app.listen(config.PORT, () => {
    console.log('Listening on port', config.PORT);
  });

module.exports = server;


