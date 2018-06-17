import express from 'express';
import * as jwt from 'jsonwebtoken';
import { GameController } from '../controllers/gameController';

const router = express.Router();
const gameController = new GameController();

router.get('/', (req, res) => {
  res.send('hello');
});

router.post('/', (req, res) => {
  const player = jwt.decode(req.body.token);
  const game = gameController.createGame(player.name)
  res.json(game); 
});

router.post('/:gameid', (req, res) => {
  const player = jwt.decode(req.body.token);
  const result = gameController.joinGame(req.params.gameid, player.name)
  if(result) {
    res.send(200);
  } else {
    res.send(400);
  }
});

router.post('/:gameid/stocks', (req, res) => {
  const player = jwt.decode(req.body.token);
  const result = gameController.getStocks(req.params.gameid);
  res.json(result);
})

export default router;