export class PlayerController {

  playerList = [];

  createPlayer(name) {
    const player = {
      name: name,
      //Additionam properties other than name
    }
    this.playerList.push(player);
    return player;
  }

  getPlayer(name) {
    return this.playerList.find(p => p.name==name)
  }

}