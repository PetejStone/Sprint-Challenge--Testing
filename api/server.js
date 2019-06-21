const express = require('express')
const Games = require('../games/gamesModel.js')
const server = express()
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({api: 'working'})
    .catch(err => {res.status(500).json({message: 'server error'})})


})

server.get('/games', (req, res) => {
    Games.get()
    .then( games => {
        res.status(200).json(games)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
module.exports = server