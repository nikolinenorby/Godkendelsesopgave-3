//gemmer express-library i variabel (angiver port)
const express = require('express')

//initialiserer express-server
const server = express()
const port = 3000

//henter controller fra sti
let userArray = require('./Controller/userController');
server.use('./model/user', userArray)

let interestsArray = require('./Controller/interestsController');
server.use('./model/user', interestsArray)

let matchArray = require('./Controller/matchController');
server.use('./model/user', matchArray)


//server aktiveres
server.listen(port, err => {
    if (err)
{
  return console.log('Error', err);}
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})