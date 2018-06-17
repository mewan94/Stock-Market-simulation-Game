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
  const transaction = playerController.executeTransaction(req.body.token, req.body.type, req.body.amount); 
  res.json(transaction); 
})

router.get('/:id', (req, res) => {
 const player=playerController.getPlayer(req.params.id);
 res.json(player);
});

export default router;