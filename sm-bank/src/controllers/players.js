import * as jwt from 'jsonwebtoken';
import { Player } from '../models/Player';
import config from '../config.json';
export class PlayerController {

  playerList = [];
  
  createPlayer(name) {
    const player = new Player(name);
    this.playerList.push(player);
    return player;
  }

  getPlayer(name) {
    const player = this.playerList.find(p => p.name==name)
    if(player){
      return player;
    }
    else{
      return new Error("No Such Player");
    }
  }

  getPlayerToken(player) {    
    const token = jwt.sign(JSON.stringify(player), config.jwtSecret);
    return token;
  }
  executeTransaction(token,type,amount){
   let p=jwt.decode(token);
   
   let player = this.getPlayer(p.name);
   
   if(type=="withdraw"){
      player.withdraw(amount);
   }
   else if(type=="deposit"){
     player.deposit(amount);
   }
  }
}