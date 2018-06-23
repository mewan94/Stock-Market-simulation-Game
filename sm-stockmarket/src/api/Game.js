import express from 'express';
import * as jwt from 'jsonwebtoken';
import app from '../index'

import { GameController } from '../controllers/gameController';

const router = express.Router();

const gameController = new GameController();

export default (io) => {

  router.get('/', (req, res) => {
    res.send('hello');
  });
  
  router.post('/', (req, res) => {
    if (!req.body.token) {
      res.send(403, { error: 'Unauthorized: Token not found'} );
    }
    const player = jwt.decode(req.body.token);
    const game = gameController.createGame(player.name)
    res.json(game); 
  });
  
  router.post('/:gameid', (req, res) => {
    const player = jwt.decode(req.body.token);
    const result = gameController.joinGame(req.params.gameid, player.name)
    if(result !== false) {
      res.json(result);
    } else {
      res.send(400);
    }
  });

  router.post('/:gameid/start', (req, res) => {
    const player = jwt.decode(req.body.token);
    const result = gameController.startGame(req.params.gameid, player.name)
    res.status(result.status).send(result.res);
  });

  router.post('/:gameid/stocks', (req, res) => {
    const player = jwt.decode(req.body.token);
    const result = gameController.getStocks(req.params.gameid);
    res.json(result);
  });
  
  io.on('connection', (socket) => {
    console.log('A user connected');
    socket.emit('test', { hello: 'world' });
  });

  return router;
} 