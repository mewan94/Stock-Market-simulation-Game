import express from 'express';
import { PlayerController } from "../controllers/players";

const router = express.Router();
const playerController = new PlayerController();

router.get('/', (req, res) => {
  res.send('hello');
});

router.post('/', (req, res) => {
  const p = playerController.createPlayer(req.body.name); 
  const token  = playerController.getPlayerToken(p)
  res.json(token); 
})

router.post('/', (req, res) => {
  const transaction = playerController.executeTransaction(req.body.token,req.body.type); 
  res.json(transaction); 
})
export default router;