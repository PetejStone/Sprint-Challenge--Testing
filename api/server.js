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
        if (games) {
            res.status(200).json(games)
        } else {
            res.status(422)
        }
        
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

server.post('/games', validatePost, async (req, res) => {
    try {
        const game = await Games.insert(req.body);
        res.status(201).json(game);
      } catch (error) {
        // log error to server
        console.log(error);
        res.status(500).json({
          message: 'Error adding the game',
        });
      }
});

function validatePost(req, res, next) {
    const bodyLength = Object.keys(req.body);//converts object to array to get length
      const game = req.body;
      if (game && game.title && game.genre) {
        next();
      }
      if (bodyLength.length <= 0)  {
        res.status(422).json({message: 'missing post data'})
      }
      if ( !game.title ) {
        res.status(422).json({message: 'missing required text field'})
      }
      if ( !game.genre ) {
        res.status(422).json({message: 'missing required genre field'})
      }
    };
module.exports = server