import express from 'express';
import { PlayerController } from "../controllers/players";

const router = express.Router();
const playerController = new PlayerController();



router.post('/', (req, res) => {
  const p = playerController.createPlayer(req.body.name); 
  const token  = playerController.getPlayerToken(p)
  res.json(token); 
})

router.post('/transaction', (req, res) => {
  const transaction = playerController.executeTransaction(req.body.token,req.body.type,req,req.body.amount); 
  res.json(transaction); 
})

router.get('/:name', (req, res) => {
 const player=playerController.getPlayer(req.param.name);
});

export default router;