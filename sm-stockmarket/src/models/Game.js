export class Game {
    constructor(gameAdmin) {
        this.gameAdmin = gameAdmin;   
        this.gameID=gameAdmin;
    }

    getGameID(){
      return this.gameID;
    }
    startGame(){
        return this.gameID;
    }
}